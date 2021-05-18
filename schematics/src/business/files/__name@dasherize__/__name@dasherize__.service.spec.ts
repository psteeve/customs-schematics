import { Resource, ResourceBuilder, Url } from 'app/core/behavior/api';
import { <%=classify(name)%> } from 'app/model/dto';
import { hot } from 'jest-marbles';
import { resourceBuilderMock } from 'testing';
import { <%=classify(name)%>Service } from './<%=dasherize(name)%>.service';

const fakeUrlFibi = 'fakeUrlFibi';
const fakeAssureId = 'fakeAssureId';

const fakeEntity = 'fakeEntity';

describe('<%=classify(name)%>Service', () => {
  let mockResource: Resource<<%=classify(name)%>>;
  let resourceBuilder: ResourceBuilder;
  let service: <%=classify(name)%>Service;
  const mockUrlService: Url = { fibi: fakeUrlFibi };

  beforeEach(() => {
    mockResource = ({
      list: jest.fn().mockReturnValue(hot('-a-', { a: fakeEntity }))
    } as unknown) as Resource<<%=classify(name)%>>;
    resourceBuilder = resourceBuilderMock(mockResource);

    service = new <%=classify(name)%>Service(resourceBuilder, mockUrlService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('calls resource.list', () => {
      service.list({ assureId: fakeAssureId });
      expect(mockResource.list).toBeCalled();
    });
    it('return an Observable<ReadonlyArray<<%=classify(name)%>>>', () => {
      expect(service.list({ assureId: fakeAssureId })).toBeObservable(
        hot('-a-', { a: fakeEntity })
      );
    });
  });
});
