import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';


@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgbModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
