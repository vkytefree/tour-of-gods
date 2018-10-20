import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/** NOTA: apparentemente il FormsModule era già stato inserito **/
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
/** È necessario importare tutti i componenti (anche questo è stato importato in automatico) **/
import { GodComponent } from './god/god.component';

/** contiene metadati critici, affiancando il Component decorator (top-level AppModule class) **/
@NgModule({
  declarations: [
    AppComponent,
    GodComponent /** i componenti vanno anche dichiarati, non solo importati! **/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
