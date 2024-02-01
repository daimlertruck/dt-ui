import { PlopTypes } from '@turbo/gen';

import { newComponentPackageGenerator } from './new-component-package/generator';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  newComponentPackageGenerator(plop);
}
