import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { <%=classify(name) %>Component } from './<%=dasherize(name)%>.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [<%=classify(name)%>Component],
  exports: [<%=classify(name)%>Component]
})
export class <%=classify(name)%>Module {}
