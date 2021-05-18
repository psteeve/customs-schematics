import { AbstractApiFailedAction, ApiError } from 'app/core/behavior/error-handler';
import { GenericAction } from 'tools/ngrx';

type ParameterTypeToReplace = {};

export class Load<%=classify(name) %>Action extends GenericAction {
  constructor(public params: ParameterTypeToReplace) {
    super();
  }
}

export class Load<%=classify(name) %>FailedAction extends AbstractApiFailedAction <
  ApiError
  > {}

export class Load<%=classify(name) %>SuccessAction extends GenericAction {
  constructor(public params: ParameterTypeToReplace) {
    super();
  }
}

export class Init<%=classify(name)%>Action extends GenericAction {
  constructor(public payload: Record<string, ReadonlyArray<<%=classify(name)%>>>) {
    super();
  }
}
