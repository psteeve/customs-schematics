import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingButtonDirective } from 'app/components/loading-button';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { distinctUntilHashChanged } from 'tools/rxjs/operators';

@Component({
  selector: 'app-<%=dasherize(name)%>-<%=kind%>',
  templateUrl: './<%=dasherize(name)%>.<%=kind%>.component.html'
})
export class <%=classify(name)%><%=classify(kind)%>Component implements OnInit, OnDestroy {
  private formValueChangesSubscription: Subscription;

  @ViewChild('loadingButton')
  public loadingButton: LoadingButtonDirective;

  @Input() set isLoading(isLoading: boolean) {
    if (!isLoading) {
      this.loadingButton?.reset();
    }
  }
  @Input() errors: ReadonlyArray<{ error: any }> = [];

  @Output() public change = new EventEmitter<any>();
  @Output() public submit = new EventEmitter<any>();
  @Output() public back = new EventEmitter<void>();

  public form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formValueChangesSubscription = this.form.valueChanges
      .pipe(distinctUntilHashChanged())
      .pipe(debounceTime(DEBOUNCE_TIME))
      .pipe(tap(form => this.emitForm(form)))
      .subscribe();

    this.initForm();
  }
  ngOnDestroy(): void {
    this.formValueChangesSubscription.unsubscribe();
  }

  public get canSubmit(): boolean {
    return this.form.valid;
  }

  private emitForm(form): void {
    if (isTrustedEvent(form)) {
      return;
    }

    this.change.emit(form);
  }

  private initForm(): void {
    // TODO
  }
}
