import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetailComponent } from '../detail/detail.component';

interface IForm {
  value: FormControl<number>;
}

@Component({
  selector: 'app-collatz',
  template: `<form [formGroup]="form" class="mb-5">
      <div class="input-group">
        <input
          type="number"
          [formControl]="form.controls.value"
          min="1"
          step="1"
          class="form-control form-control-lg"
          placeholder="Type a number"
          aria-label="Type a positive number"
        />
      </div>
    </form>

    @if (form.valid) {
      <app-detail [value]="form.getRawValue().value" />
    }

    @if (form.invalid && form.dirty) {
      <p class="text-danger">Please enter a valid number. Must be greater or equal than 1</p>
    }`,
  imports: [ReactiveFormsModule, DetailComponent]
})
export class CollatzComponent {
  protected readonly form = new FormGroup<IForm>({
    value: new FormControl(1, { validators: [Validators.required, Validators.min(1)], nonNullable: true })
  });
}
