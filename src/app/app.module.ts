import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Counting } from './counting/counting.componet';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Counting
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
