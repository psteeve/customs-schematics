import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingButtonModule } from 'app/components/loading-button';
import { <%=classify(name)%><%=classify(kind)%>Component } from './<%= dasherize(name)%>.<%=kind%>.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    LoadingButtonModule
  ],
  declarations: [<%=classify(name)%><%=classify(kind)%>Component],
  exports: [<%=classify(name)%><%=classify(kind)%>Component]
})
export class <%=classify(name)%><%=classify(kind)%>Module {}
