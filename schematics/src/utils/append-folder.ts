import { BasicsOptions } from './basics-options';
import { toPath } from './to-path';

export function appendFolder(folder: string) {
  return (options: BasicsOptions): BasicsOptions => ({
    ...options,
    path: `${folder}/${toPath(options)}`
  });
}
