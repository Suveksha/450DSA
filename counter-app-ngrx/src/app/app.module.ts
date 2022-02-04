import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LoadingspinnerComponent } from './shared/loadingspinner/loadingspinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoadingspinnerComponent,
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({counter:counterReducer, posts:postsReducer}),
    StoreModule.forRoot(appReducer),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
