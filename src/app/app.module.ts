import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ButtonComponent } from './core/components/button/button.component';
import { TextInputModule } from './core/components/text-input/text-input.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    TextInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
