import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-<%= dasherize(name)%>',
  templateUrl: './<%= dasherize(name)%>.component.html',
  styleUrls: ['./<%= dasherize(name)%>.component.scss']
})
export class <%=classify(name)%>Component {
  @Input() input;

  @Output() output = new EventEmitter<void>();
}
