import {
  AbstractApiFailedAction,
  ApiError
} from 'app/core/behavior/error-handler';
import { EstimationId, ProduitSouscritId } from 'app/model/dto';
import { GenericAction } from 'tools/ngrx';

export class <%=classify(name) %>CancelAction extends GenericAction {}

export class <%=classify(name) %>SaveAction extends GenericAction {
  constructor(public params: EstimationId & ProduitSouscritId) {
    super();
  }
}

export class <%=classify(name) %>SaveFailedAction extends AbstractApiFailedAction<
  ApiError
> {}

export class <%=classify(name) %>SaveSuccessAction extends GenericAction {}
