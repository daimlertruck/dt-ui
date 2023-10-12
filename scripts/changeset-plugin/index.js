const changesetPlugin = require('changeset-conventional-commits');

if (process.argv.includes('--add-changesets')) {
  return changesetPlugin.conventionalCommitChangeset();
}

if (process.argv.includes('--add-tag')) {
  return changesetPlugin.addTag();
} else {
  console.log(
    `\u001b[31m Please provide one of the following arguments: 
      --add-changesets: adds changesets based on conventional commits. 
      --add-tag: adds git-tag for the current package version. \x1b[0m`
  );
}
