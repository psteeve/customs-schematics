import { State } from '@ngrx/store';
import { <%=classify(name)%> } from 'app/model/dto';
import { Init<%=classify(name)%>Action } from './<%= dasherize(name)%>.actions';

// to be replace if necessary, it's just an example for getting started
export function init<%=classify(name)%>Reducer(
  state,
  { payload: { assureId, <%=camelize(name)%> } }: Init<%=classify(name)%>Action
): State<Record<string, ReadonlyArray<<%=classify(name)%>>>> {
  return { ...state, [assureId]: <%=camelize(name)%> };
}
