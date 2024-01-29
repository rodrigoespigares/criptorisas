import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';

import { environment } from './environments/environment.development';

const firebaseApp = initializeApp(environment.firebaseConfig);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));