import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {"projectId":"criptorisa",
      "appId":"1:680485708204:web:ef6bcfc5c4f98b689b5a09",
      "storageBucket":"criptorisa.appspot.com",
      "apiKey":"AIzaSyANyo4yRS3aUjaPCkUuoVDEOZe0OSs89Tk",
      "authDomain":"criptorisa.firebaseapp.com",
      "messagingSenderId":"680485708204"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ]
};
