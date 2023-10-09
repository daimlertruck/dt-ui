import path from 'path';

const CHANGESET_LOCATION = '.changeset';

const resolvePath = (fileName: string) => {
  return process.cwd(), path.join(CHANGESET_LOCATION, fileName);
};

export const CHANGESET_CONFIG_FILE_LOCATION = resolvePath('config.json');

export const CHANGESET_TAGS_FILE_LOCATION = resolvePath('tag-packages.json');
