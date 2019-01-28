import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { environment } from 'environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment['apiKeyMaps'],
      libraries: ['visualization'],
    }),
  ],
  providers: [
    GoogleMapsAPIWrapper,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
