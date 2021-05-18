import { strings } from '@angular-devkit/core';
import { chain, Rule, Tree } from '@angular-devkit/schematics';
import { BasicsOptions, makeRule } from 'utils';

export function fun(options: BasicsOptions): Rule {
  return chain([makeRule(options), fullfillIndex(options)]);
}

export function fullfillIndex(options: BasicsOptions): Rule {
  return (tree: Tree) => {
    const functionsPath = '/src/app/shared/func';
    const functionsIndexPath = `${functionsPath}/index.ts`;
    const newContent = `export * from './${strings.dasherize(options.name)}';`;

    if (!tree.exists(functionsIndexPath)) {
      tree.create(functionsIndexPath, '\n');
      return tree;
    }
    const indexBuffer = tree.read(functionsIndexPath);
    // tslint:disable-next-line:no-null-keyword
    if (indexBuffer != null) {
      tree.overwrite(
        functionsIndexPath,
        `${indexBuffer.toString()}${newContent}\n`
      );
    }
    return tree;
  };
}
