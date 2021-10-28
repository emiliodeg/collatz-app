import { Component, Input, OnChanges } from '@angular/core';
import { detail, ICollatzDetail } from 'collatz-generator/lib';

@Component({
  selector: 'app-detail[value]',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnChanges {
  @Input() value;

  detail: ICollatzDetail;

  ngOnChanges() {
    this.detail = detail(this.value);
  }
}
