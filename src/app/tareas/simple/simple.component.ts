import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea-model';
import {faTrashAlt, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aub-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  tareas : Array<TareaModel>
  newTarea : TareaModel;
  papelera: IconDefinition;
  storeName: string;

  @ViewChild('confirmar', {static:true}) confirmar: ElementRef
  constructor() { }

  ngOnInit() {
    this.storeName = 'tareas'
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []

    this.newTarea = new TareaModel()
    this.papelera = faTrashAlt;
  }

  onAddTarea(){
    if(!this.newTarea.nombre){
      return
    }else{
      this.tareas.push(this.newTarea)
      this.newTarea = new TareaModel()
      console.log(this.tareas)
    }
    this.actualizarStore()
  }

  onDeleteConfirm() {
    this.confirmar.nativeElement.showModal()
  }

  onDeleteTarea(ev) {
    if(ev){
      this.tareas = []
      localStorage.removeItem(this.storeName)
    }
    
    this.confirmar.nativeElement.close()
  }

  onChange(){
    console.log(this.tareas)
    this.actualizarStore()
  }

  onDelete(i: number) {
    this.tareas.splice(i, 1)
    this.actualizarStore()
  }

  private actualizarStore(){
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas))
  }

  onModify(event: any, i: number) {
    event.target.previousElementSibling.setAttribute('contenteditable', true);
  }

  onEdit(event: any, i:number){
    this.tareas[i].nombre = event.target.textContent 
    this.actualizarStore();

  }

}
