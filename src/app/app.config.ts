import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDuE25-X1Zp7EDtpHoscJeGxKImGa_cfiI',
  authDomain: 'todo-app-7daab.firebaseapp.com',
  projectId: 'todo-app-7daab',
  storageBucket: 'todo-app-7daab.appspot.com',
  messagingSenderId: '41335064162',
  appId: '1:41335064162:web:3bf90184e205211216f33b',
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
