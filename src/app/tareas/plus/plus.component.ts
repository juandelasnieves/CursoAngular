import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea-model';
import { EditTareaIf } from 'src/app/models/edit-tarea-interface';

@Component({
  selector: 'aub-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {

  tareas: Array<TareaModel>
  storeName: string;
  @ViewChild('confirmar', {static: true}) confirmar : ElementRef

  constructor() { }

  ngOnInit() {
    this.storeName = 'tareas'
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []
  }

  private actualizarStore(){
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas))
  }
  onAddTarea(tarea: TareaModel){
    this.tareas.push(tarea)
    this.actualizarStore()

  }

  onDeleteTarea(i:number){
    this.tareas.splice(i,1)
    this.actualizarStore()
  }

  onChangeTarea(i:number){
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted
    this.actualizarStore()
  }

  sendData(item: TareaModel) : TareaModel{
    return {...item}
  }

  onEditTarea(item: EditTareaIf){
    this.tareas[item.i].nombre = item.nombre
    this.actualizarStore
  }

  onConfirmDelete(){
    this.confirmar.nativeElement.showModal()
  }

  onDeleteTareas(event: boolean){
    if(event){
      this.tareas = []
    }
    this.confirmar.nativeElement.close()

  }

}

