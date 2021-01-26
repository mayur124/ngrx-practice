import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { ForecastsListComponent } from './components/forecasts-list/forecasts-list.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { LocationService } from './services/location/location.service'
import { WeatherService } from './services/weather/weather.service'

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
    AppRoutingModule
  ],
  providers: [WeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
