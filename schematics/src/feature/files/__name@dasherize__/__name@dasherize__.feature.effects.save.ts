import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ProduitSouscrit } from 'app/model/dto';
import { combineLatest, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofAction, selectFirst } from 'tools/ngrx';
import {
  <%=classify(name) %>SaveAction,
  <%=classify(name) %>SaveFailedAction,
  <%=classify(name) %>SaveSuccessAction
} from './<%=dasherize(name) %>.feature.actions';

@Injectable()
export class <%=classify(name) %>FeatureEffectsSave {
  @Effect()
  onSave$ = this.actions$
    .pipe(ofAction(<%=classify(name) %>SaveAction))
    .pipe(map(({ params }) => params))
    .pipe(
      switchMap(params =>
        combineLatest([
          of(params),
          this.store$.pipe(selectFirst(fetchDataSelector, params))
        ])
      )
    )
    .pipe(
      switchMap(
        ([
          { estimationId, produitSouscritId },
          data
        ]) =>
          // This is an example on how to update date to backend
          this.dataService.save({
            estimationId,
            produitSouscritId,
            data
          })
      )
    )
    .pipe(
      switchMap(({ optionsSouscrites: { id } }) => [
        // This is an example on how to refresh the store from backend
        new UpdateDataAction({ produitSouscritId, id }),
        new <%=classify(name) %>SaveSuccessAction()
      ])
    )
    .pipe(
      catchError(error => of(new <%=classify(name) %>SaveFailedAction({ error })))
    );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store$: Store<{
      produitSouscrit: Record<string, ProduitSouscrit>;
      data: Record<string, Data>;
    }>
  ) {}
}
