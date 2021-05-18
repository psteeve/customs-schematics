import { strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { normalize } from 'path';
import { BasicsOptions } from './basics-options';

function setupOptions(options: BasicsOptions, host: Tree): void {
  const workspace = getWorkspace(host);

  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }

  const project = workspace.projects[options.project];

  if (options.path === undefined) {
    const projectDirName =
      project.projectType === 'application' ? 'app' : 'lib';
    options.path = `/${project.root}/src/${projectDirName}`;
  }

  const parsedPath = parseName(options.path, options.name);

  options.name = parsedPath.name;
  options.path = parsedPath.path;
}

export function makeRule(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    setupOptions(options, host);

    options.path = options.path ? normalize(options.path) : options.path;

    const templateSource = apply(url('./files'), [
      template({ ...strings, ...options, upperCase, title }),
      move(options.path || '')
    ]);

    const rule = branchAndMerge(mergeWith(templateSource));
    return rule(host, context);
  };
}

export function upperCase(value: string): string {
  return value.toUpperCase();
}

export function title(value: string): string {
  return strings.capitalize(strings.underscore(value).replace('_', ' '));
}
