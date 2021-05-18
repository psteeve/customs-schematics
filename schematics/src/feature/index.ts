import { Rule } from '@angular-devkit/schematics';
import { appendFolder, BasicsOptions, makeRule, pathWithModule } from 'utils';

export function feature(options: BasicsOptions): Rule {
  return makeRule(pathWithModule(appendFolder('features')(options)));
}
