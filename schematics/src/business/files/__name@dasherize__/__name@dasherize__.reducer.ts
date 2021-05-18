import { Action, State } from '@ngrx/store';
import { createReducer } from 'tools/ngrx';
import * as actions from './<%=dasherize(name)%>.actions';
import * as reducers from './<%=dasherize(name)%>.reducers';

export function reducer(state: State<any>, action: Action) {
  return createReducer(actions, reducers)(state, action);
}
