import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Firebase setup instructions

// 1. delete this line, then...
import { firebaseConfig } from '../env';
import { TypeAheadComponent } from './type-ahead/type-ahead.component'; 

// 2. Add your own firebase config to environment.ts
// 3. Use the environment to initialize angularfire2 below, like so AngularFireModule.initializeApp(environment.firebaseConfig),

@NgModule({
  declarations: [
    AppComponent,
    TypeAheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
