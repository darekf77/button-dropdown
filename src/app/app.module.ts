import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {  ButtonDropdownModule } from 'components';
import { ServiceWorkerModule } from '@angular/service-worker';

const workrPath = `ngsw-worker.js`;
console.log(`Worker path: ${workrPath}`)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    ServiceWorkerModule.register(workrPath, { enabled: true }),
    ButtonDropdownModule
  ],
  exports: [
    ButtonDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
