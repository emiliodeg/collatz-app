import { ApplicationConfig, enableProdMode, provideZonelessChangeDetection } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const config: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection()
  ]
}

bootstrapApplication(AppComponent, config).catch(console.error);
