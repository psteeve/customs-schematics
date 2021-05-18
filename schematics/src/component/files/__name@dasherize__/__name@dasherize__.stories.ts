import { action } from '@storybook/addon-actions';
import { centered } from '@storybook/addon-centered/angular';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { initialize } from 'tools/storybook';
import { <%=classify(name)%>Module } from './<%= dasherize(name)%>.module';

storiesOf('Component/<%=title(name)%>', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(initialize(<%=classify(name)%>Module))
  .add('default', () => ({
    template: `<app-<%= dasherize(name)%>
      [input]="input"
      (output)="output($event)"
    ></app-<%= dasherize(name)%>>`,
    props: {
      input: select('input', ['A', 'B', 'C'], 'A'),
      output: action('output')
    }
  }));
