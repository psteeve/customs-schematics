import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'app/shared/pipes';
import { <%=classify(name)%>Component } from './<%= dasherize(name)%>.component';

@NgModule({
  imports: [CommonModule, TranslateModule, PipesModule],
  declarations: [<%=classify(name)%>Component],
  exports: [<%=classify(name)%>Component]
})
export class <%=classify(name)%>Module {}
