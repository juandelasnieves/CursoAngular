const saludo: string = 'Hola';
console.log(saludo)

let cadena: string;
let num: number;
let isOk: boolean;
let u: any;
let id: string | number;

let data: Array<any>
let numbers: Array<number>

data = []
numbers = []
data.push(1)

//Inferencia del tipo
let edades: Array<number> = [23,24]
edades.push('Pepe')