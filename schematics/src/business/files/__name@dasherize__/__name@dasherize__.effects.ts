import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { <%=classify(name)%> } from 'app/model/dto';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofAction } from 'tools/ngrx';
import {
  Init<%=classify(name)%>Action,
  Load<%=classify(name)%>Action,
  Load<%=classify(name)%>FailedAction,
  Load<%=classify(name)%>SuccessAction
} from './<%= dasherize(name)%>.actions';
import { <%=classify(name)%>Service } from './<%= dasherize(name)%>.service';

// Just a boilerplate, to replace if necessary
@Injectable()
export class <%=classify(name)%>Effects {
  @Effect()
  load<%=classify(name)%>$ = this.actions
    .pipe(ofAction(Load<%=classify(name)%>Action))
    .pipe(map(({ params }) => params))
    .pipe(
      switchMap(({ assureId }) =>
        this.<%=camelize(name)%>Service
          .list({ assureId })
          .pipe(
            switchMap(<%=camelize(name)%> => [
              new Init<%=classify(name)%>Action({
                [assureId]: <%=camelize(name)%>
              }),
              new Load<%=classify(name)%>SuccessAction({ assureId })
            ])
          )
          .pipe(
            catchError(error => of(new Load<%=classify(name)%>FailedAction(error)))
          )
      )
    );

  constructor(
    private actions: Actions,
    private <%=camelize(name)%>Service: <%=classify(name)%>Service,
    private store$: Store<{
      <%=camelize(name)%>: Record<string, ReadonlyArray<<%=classify(name)%>>>;
    }>
  ) {}
}
