import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { noop } from 'tools/func';

@Component({
  selector: 'app-<%=dasherize(name)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: <%=classify(name)%>Component,
      multi: true
    }
  ]
})
export class <%=classify(name)%>Component implements ControlValueAccessor, OnDestroy {
  private destroyed$: Subject <boolean> = new Subject();

  <%=camelize(name)%>Group: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.<%=camelize(name)%>Group = this.formBuilder.group({});

    this.<%=camelize(name)%>Group.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => this.onChange(value));

    this.<%=camelize(name)%>Group.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => this.onChange(value));

  }

  onChange = noop;

  onTouched = noop;

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(_value: any): void {
    // TODO implements the writeValue protocol of the ControlValueAccessor
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
