import { ApiError, HttpError } from 'app/core/behavior/error-handler';
import {
  FeatureMarkErrorAction,
  FeatureMarkLoadAction,
  FeatureMarkUnloadAction,
  FeatureName
} from 'app/core/behavior/feature';
import { RouterGoNextAction } from 'app/core/behavior/router';
import { StepEnum, STEPPER_STEP_TO_ROUTE } from 'app/core/behavior/step';
import { cold, hot } from 'jest-marbles';
import {
  <%=classify(name) %>CancelAction,
  <%=classify(name) %>SaveAction,
  <%=classify(name) %>SaveFailedAction,
  <%=classify(name) %>SaveSuccessAction
} from './<%=dasherize(name) %>.feature.actions';
import { <%=classify(name) %>FeatureEffectsRouting } from './<%=dasherize(name) %>.feature.effects.routing';

const fakeEstimationId = 'fakeEstimationId';
const fakeProduitSouscritId = 'fakeProduitSouscritId';

describe('<%=classify(name) %>FeatureEffectsRouting', () => {
  let effects: <%=classify(name) %>FeatureEffectsRouting;

  describe('when dispatch <%=classify(name) %>SaveAction', () => {
    beforeEach(() => {
      effects = new <%=classify(name) %>FeatureEffectsRouting(
        hot('--a-', {
          a: new <%=classify(name) %>SaveAction({
            estimationId: fakeEstimationId,
            produitSouscritId: fakeProduitSouscritId
          })
        })
      );
    });

    it('dispatch FeatureMarkLoadAction', () => {
      expect(effects.onSaveMarkLoad$).toBeObservable(
        cold('--a', {
          a: new FeatureMarkLoadAction(
            FeatureName.<%=upperCase(underscore(name))%>
          )
        })
      );
    });
  });

  describe('when dispatch <%=classify(name) %>SaveSuccessAction', () => {
    beforeEach(() => {
      effects = new <%=classify(name) %>FeatureEffectsRouting(
        hot('--a-', {
          a: new <%=classify(name) %>SaveSuccessAction()
        })
      );
    });

    it('dispatch FeatureMarkUnloadAction', () => {
      expect(effects.onSaveSuccess$).toBeObservable(
        cold('--a', {
          a: new FeatureMarkUnloadAction(
            FeatureName.<%=upperCase(underscore(name))%>
          )
        })
      );
    });
  });

  describe('when dispatch <%=classify(name) %>SaveFailedAction', () => {
    const fakeError = ({ error: 'fakeError' } as unknown) as {
      error: HttpError<ApiError>;
    };
    beforeEach(() => {
      effects = new <%=classify(name) %>FeatureEffectsRouting(
        hot('--a-', {
          a: new <%=classify(name) %>SaveFailedAction(fakeError)
        })
      );
    });

    it('dispatch FeatureMarkUnloadAction', () => {
      expect(effects.onSaveFailed$).toBeObservable(
        cold('--a', {
          a: new FeatureMarkErrorAction(
            FeatureName.<%=upperCase(underscore(name))%>,
            'fakeError'
          )
        })
      );
    });
  });

  describe('when dispatch <%=classify(name) %>CancelAction', () => {
    beforeEach(() => {
      effects = new <%=classify(name) %>FeatureEffectsRouting(
        hot('--a-', {
          a: new <%=classify(name) %>CancelAction()
        })
      );
    });

    it('dispatch RouterGoNextAction', () => {
      expect(effects.onBack$).toBeObservable(
        cold('--a', {
          a: new RouterGoNextAction({
            next: STEPPER_STEP_TO_ROUTE[StepEnum.ROUTE_TO_ADD]
          })
        })
      );
    });
  });
});
