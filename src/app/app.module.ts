import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import { AppComponent } from './app.component';

import {environment} from '../environments/environment';
import {Store} from './store';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import {HealthModule} from './health/health.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    AuthModule,
    HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
