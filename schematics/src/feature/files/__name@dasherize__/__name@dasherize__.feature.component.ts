import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Feature,
  featureErrorsSelector,
  FeatureMarkHereAction,
  FeatureName,
  isFeatureLoadingSelector
} from 'app/core/behavior/feature';
import { ParameterService } from 'app/core/behavior/navigation';
import { Observable } from 'rxjs';
import { selectDistinctUntilChanged, selectFirst } from 'tools/ngrx';

@Component({
  selector: 'app-<%=dasherize(name)%>-feature',
  providers: [ParameterService],
  template: `
    <app-<%=dasherize(name)%>-<%=kind%>
      [data]="data$ | async"
      [isLoading]="isLoading$ | async"
      [errors]="errors$ | async"
     ></app-<%=dasherize(name)%>-<%=kind%>>
  `
})
export class <%=classify(name)%>FeatureComponent implements OnInit {
  public data$ = this.store.pipe(
    selectFirst(<%=camelize(name)%>Selector, {
      estimationId: this.parameter.estimationId
    })
  );

  public isLoading$: Observable<boolean> = this.store.pipe(
    selectDistinctUntilChanged(isFeatureLoadingSelector, FeatureName.<%=upperCase(underscore(name))%>)
  );

  public errors$: Observable<ReadonlyArray<{ error: any }>> = this.store.pipe(
    selectDistinctUntilChanged(featureErrorsSelector, FeatureName.<%=upperCase(underscore(name))%>)
  );

  constructor(
    private parameter: ParameterService,
    private store: Store<{
      feature: Feature;
    }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new FeatureMarkHereAction(FeatureName.<%=upperCase(underscore(name))%>));
  }
}
