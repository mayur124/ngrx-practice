import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { ForecastsListComponent } from './components/forecasts-list/forecasts-list.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { WeatherService } from './services/weather/weather.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionsEffects } from './effects/current-conditions.effects'
import { ForecastEffects } from "./effects/forecast.effects";
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([CurrentConditionsEffects, ForecastEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }) // {stateKey: 'router'} is reducer's key of router mentioned in index.ts
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
