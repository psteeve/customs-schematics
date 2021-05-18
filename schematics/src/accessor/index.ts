import { Rule } from '@angular-devkit/schematics';
import { appendFolder, BasicsOptions, makeRule, pathWithModule } from 'utils';

export function accessor(options: BasicsOptions): Rule {
  return makeRule(pathWithModule(appendFolder('components')(options)));
}
