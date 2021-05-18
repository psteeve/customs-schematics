import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssureId, <%=classify(name)%> } from 'app/model/dto';

// To be replaced, just an example for getting started
interface AppState {
  <%=camelize(name)%>: Record<string, ReadonlyArray <<%=classify(name) %>>>;
}

const <%=camelize(name) %>FeatureSelector = createFeatureSelector<
  AppState,
  Record<string, ReadonlyArray<<%=classify(name) %>>>
>('<%=camelize(name)%>');

export const <%=camelize(name) %>Selector = createSelector<
  AppState,
  AssureId,
  Record<string, ReadonlyArray<<%=classify(name)%>>>,
  ReadonlyArray<<%=classify(name) %>>
>(
  <%=camelize(name)%>FeatureSelector,
  (<%=camelize(name)%>s, { assureId }: AssureId) => <%=camelize(name)%>s?.[assureId]
);
