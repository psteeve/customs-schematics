import { Rule } from '@angular-devkit/schematics';
import { appendFolder, BasicsOptions, makeRule, pathWithModule } from 'utils';

export function component(options: BasicsOptions): Rule {
  return makeRule(pathWithModule(appendFolder('components')(options)));
}
