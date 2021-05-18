import { Rule } from '@angular-devkit/schematics';
import { appendFolder, BasicsOptions, makeRule, pathWithModule } from 'utils';

export function business(options: BasicsOptions): Rule {
  return makeRule(pathWithModule(appendFolder('business')(options)));
}
