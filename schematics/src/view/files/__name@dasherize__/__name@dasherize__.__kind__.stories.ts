import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { initialize } from 'tools/storybook';
import { <%=classify(name)%><%=classify(kind)%>Module } from './<%=dasherize(name)%>.<%=kind%>.module';

storiesOf('Feature/<%=classify(name)%>', module)
  .addDecorator(initialize(<%=classify(name)%><%=classify(kind)%>Module))
  .add('default', () => ({
    template: `
      <app-<%=dasherize(name)%>-<%=kind%>
        (change)="change($event)"
        (submit)="submit($event)"
        (back)="back($event)">
      </app-<%=dasherize(name)%>-<%=kind%>>
    `,
    props: {
      change: action('change'),
      submit: action('submit'),
      back: action('back')
    }
  }));
