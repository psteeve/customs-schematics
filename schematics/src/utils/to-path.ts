import { BasicsOptions } from './basics-options';

export function toPath(options: BasicsOptions): string {
  return options.path ? `${options.path}` : '';
}
