import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sequence, generate } from 'collatz-generator/lib';

export type resultType = 'nextNumber' | 'sequence' | 'detail' | 'explanation';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.scss']
})
export class CollatzComponent {
  form: FormGroup = new FormGroup({
    value: new FormControl(null, [Validators.required, Validators.min(1)])
  });
  options: { [key in resultType]: string } = {
    nextNumber: 'Next number',
    sequence: 'Sequence',
    detail: 'Detail',
    explanation: 'Text'
  };
  option: resultType;

  setOption(option: resultType): void {
    this.option = option;
  }

  get value(): number {
    return this.form.value.value;
  }

  get sequence(): number[] {
    return sequence(this.value);
  }

  get next(): number {
    const generator = generate(this.value);

    return generator.next().value;
  }
}
