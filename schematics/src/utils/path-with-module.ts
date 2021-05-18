import { BasicsOptions } from './basics-options';
import { toPath } from './to-path';

export function pathWithModule(options: BasicsOptions): BasicsOptions {
  const path = whichPath(options);

  return { ...options, path };
}

const baseDirGlobal = 'src/app';
const baseDirModule = `${baseDirGlobal}/module`;

/* Decide in which directory to generate the templates (top-level, or in a module)*/
function whichPath(options: BasicsOptions) {
  return 'global' === options.module
    ? `${baseDirGlobal}/${toPath(options)}`
    : `${baseDirModule}/${options.module}/${toPath(options)}`;
}
