import { Component } from '@angular/core';
import { CollatzComponent } from "./components/collatz/collatz.component";

@Component({
  selector: 'app-root',
  template: `<h1>Collatz Number Generator App</h1>

    <p>
      This app give you more information about
      <a href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank">Collatz number conjecture.</a> You just
      need enter same positive integer in the input and choose what sort of result you want. Enjoy it!
    </p>

    <app-collatz />

    <footer class="text-center"><a href="https://github.com/emiliodeg">Checkout my profile overGitHub</a></footer> `,
  imports: [CollatzComponent]
})
export class AppComponent {}
