import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { <%=classify(name) %>ViewModule } from 'app/views/<%=dasherize(name)%>-view';
import { <%=classify(name) %>FeatureEffectsRouting } from './<%=dasherize(name)%>.feature.effects.routing';
import { <%=classify(name) %>FeatureEffectsSave } from './<%=dasherize(name)%>.feature.effects.save';
import { <%=classify(name) %>Component } from './<%=dasherize(name)%>.feature.component';

@NgModule({
  imports: [
    CommonModule,
    <%=classify(name)%><%=classify(name)%>Module,
    EffectsModule.forFeature([<%=classify(name) %>FeatureEffectsRouting, <%=classify(name) %>FeatureEffectsSave])
  ],
  declarations: [<%=classify(name)%>Component],
  exports: [<%=classify(name)%>Component]
})
export class <%=classify(name)%>FeatureModule {}
