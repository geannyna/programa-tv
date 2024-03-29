import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

const bootstrap = () => bootstrapApplication(AppComponent);

if (environment.production) {
  enableProdMode();
}

export default bootstrap;
