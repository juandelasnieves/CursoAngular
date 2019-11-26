export class TareaModel {
    constructor(
        public nombre : string = '', 
        public isCompleted: boolean = false
    ) {}
}
/*otra forma de instanciar lo de arriba
export interface TareaIf {
    nombre: string
    isCompleted: boolean

} */