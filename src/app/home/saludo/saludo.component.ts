import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string
  mensaje: string
  constructor() { }

  ngOnInit() {
    this.mensaje = 'Aquí va tu nombre'
  }

  onClickBorrar(ev: Event): void{
    console.log(ev);
    this.nombre = ''
   
  }

}
