import { Inject, Injectable } from '@angular/core';
import {
  Resource,
  ResourceBuilder,
  RessourceEnum,
  Url,
  UrlService 
} from 'app/core/behavior/api';
import { Observable } from 'rxjs';
import { AssureId, <%=classify(name) %> } from 'app/model/dto';

@Injectable({
  providedIn: 'root'
})
export class <%=classify(name)%>Service {
  constructor(
    private resourceService: ResourceBuilder,
    @Inject(UrlService) private url: Url
  ) {}

  public list({
    assureId
  }: AssureId): Observable<ReadonlyArray<<%=classify(name) %>>> {
    return this.createResource({ assureId }).list();
  }

  private createResource({ assureId }: AssureId): Resource<<%=classify(name) %>> {
    return this.resourceService.create(
      this.url.fibi,
      RessourceEnum.A_KEY_HERE,
      { assureId }
    );
  }
}
