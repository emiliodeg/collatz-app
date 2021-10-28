import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollatzComponent } from './components/collatz/collatz.component';
import { DetailComponent } from './components/detail/detail.component';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { ExplanationComponent } from './components/explanation/explanation.component';

@NgModule({
  declarations: [AppComponent, CollatzComponent, DetailComponent, YesNoPipe, ExplanationComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
