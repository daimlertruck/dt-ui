#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const { getPackagesSync } = require('@manypkg/get-packages');

const pkgInfos = getPackagesSync(process.cwd()).packages;

// map of all package names to their current version
const versionMap = pkgInfos.reduce((map, { packageJson }) => {
  map[packageJson.name] = packageJson.version;
  return map;
}, {});

const isWildcard = (v) => /^\s*[\^~]?\*\s*$/.test(v);

let failed = false;

pkgInfos.forEach(({ packageJson }) => {
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
    ...packageJson.peerDependencies,
    ...packageJson.optionalDependencies,
  };

  Object.entries(allDeps).forEach(([depName, declaredVersion]) => {
    if (!versionMap[depName] || isWildcard(declaredVersion)) return;

    const actualVersion = versionMap[depName];

    if (declaredVersion !== actualVersion) {
      console.error(
        '\x1b[31m✖ version mismatch:\x1b[0m ' +
          `${packageJson.name} depends on ${depName}@${declaredVersion}, ` +
          `but package ${depName} is at ${actualVersion}`
      );
      failed = true;
    }
  });
});

if (failed) {
  console.error(
    '\nPlease sync all internal package versions before committing.'
  );
  process.exit(1);
}
