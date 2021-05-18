import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  FeatureMarkErrorAction,
  FeatureMarkLoadAction,
  FeatureMarkUnloadAction,
  FeatureName
} from 'app/core/behavior/feature';
import { RouterGoNextAction } from 'app/core/behavior/router';
import { StepEnum, STEPPER_STEP_TO_ROUTE } from 'app/core/behavior/step';
import { map } from 'rxjs/operators';
import { ofAction } from 'tools/ngrx';
import {
  <%=classify(name) %>CancelAction,
  <%=classify(name) %>SaveAction,
  <%=classify(name) %>SaveFailedAction,
  <%=classify(name) %>SaveSuccessAction
} from './<%=dasherize(name) %>.feature.actions';

@Injectable()
export class <%=classify(name) %>FeatureEffectsRouting {
  @Effect()
  onSaveMarkLoad$ = this.actions$
    .pipe(ofAction(<%=classify(name) %>SaveAction))
    .pipe(
      map(
        () =>
          new FeatureMarkLoadAction(FeatureName.<%=upperCase(underscore(name))%>)
      )
    );

  @Effect()
  onSaveSuccess$ = this.actions$
    .pipe(ofAction(<%=classify(name) %>SaveSuccessAction))
    .pipe(
      map(
        () =>
          new FeatureMarkUnloadAction(FeatureName.<%=upperCase(underscore(name))%>)
        // TODO
        // new RouterGoNextAction({
        //   next: STEPPER_STEP_TO_ROUTE[StepEnum.TODO_NEXT_STEP]
        // })
      )
    );

  @Effect()
  onSaveFailed$ = this.actions$
    .pipe(ofAction(<%=classify(name) %>SaveFailedAction))
    .pipe(map(({ params }) => params))
    .pipe(
      map(
        ({ error }) =>
          new FeatureMarkErrorAction(
            FeatureName.<%=upperCase(underscore(name))%>,
            error
          )
      )
    );

  @Effect()
  onBack$ = this.actions$
    .pipe(ofAction(<%=classify(name) %>CancelAction))
    .pipe(
      map(
        () =>
          new RouterGoNextAction({
            next: STEPPER_STEP_TO_ROUTE[StepEnum.TODO_PREVIOUS_STEP]
          })
      )
    );

  constructor(private actions$: Actions) {}
}
