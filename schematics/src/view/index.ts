import { Rule } from '@angular-devkit/schematics';
import { appendFolder, BasicsOptions, makeRule, pathWithModule } from 'utils';

export function view(options: BasicsOptions): Rule {
  return makeRule(pathWithModule(appendFolder('views')(options)));
}
