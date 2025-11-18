import { Component, computed, input } from '@angular/core';
import { detail, ICollatzDetail } from 'collatz-generator/lib';
import { YesNoPipe } from '../../pipes/yes-no.pipe';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  template: `<h4 class="mb-3">Sequence generated: {{ detail().sequence.join(', ') }}</h4>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th span="2">More details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Even count</td>
          <td>{{ detail().even | number }}</td>
        </tr>
        <tr>
          <td>Odds count</td>
          <td>{{ detail().odds | number }}</td>
        </tr>
        <tr>
          <td>Maximum value</td>
          <td>{{ detail().max | number }}</td>
        </tr>
        <tr>
          <td>Minimum value</td>
          <td>{{ detail().min | number }}</td>
        </tr>
        <tr>
          <td>Finished</td>
          <td class="text-capitalize">{{ detail().finished | yesNo }}</td>
        </tr>
        <tr>
          <td>Primes</td>
          <td class="text-capitalize">{{ detail().primes.join(', ') || 'none' }}</td>
        </tr>
      </tbody>
    </table>
    @if (!detail().finished) {
      <div class="card bg-success text-white">
        <h1 class="card-header">A Monumental Discovery in Mathematics!</h1>
        <div class="card-body">
          <p>
            Incredible! You have just found the first known counterexample to the Collatz Conjecture. 🤯 This is an
            achievement of historical proportions in computational mathematics. Get ready, because your name might be in
            every textbook from now on. Congratulations on this discovery that could change everything! 🎉
          </p>
        </div>
      </div>
    }`,
  imports: [YesNoPipe, DecimalPipe]
})
export class DetailComponent {
  value = input.required<number>();
  detail = computed<ICollatzDetail>(() => detail(this.value()));
}
