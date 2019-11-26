import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
/* import { HomeModule } from './home/home.module'; se elimina por la carga perezosa */



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    //HomeModule se elimina para la carga perezosa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
