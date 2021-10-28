import { Component, Input, OnChanges } from '@angular/core';
import { detail, ICollatzDetail } from 'collatz-generator/lib';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent implements OnChanges {
  detail: ICollatzDetail;

  @Input() value: number;

  ngOnChanges() {
    this.detail = detail(this.value);
  }
}
