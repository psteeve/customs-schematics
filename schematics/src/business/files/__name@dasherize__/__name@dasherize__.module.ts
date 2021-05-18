import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { <%=classify(name)%>Effects } from './<%=dasherize(name)%>.effects';
import { reducer } from './<%=dasherize(name)%>.reducer';
import { <%=classify(name)%>Service } from './<%=dasherize(name)%>.service';

@NgModule({
  imports: [
    StoreModule.forFeature('<%=camelize(name)%>', reducer),
    EffectsModule.forFeature([<%=classify(name)%>Effects])
  ],
  providers: [<%=classify(name)%>Service]
})
export class <%=classify(name)%>Module {}
