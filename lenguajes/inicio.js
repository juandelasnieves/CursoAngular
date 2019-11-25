'use strict'

console.log('Hola mundo')

let x

x = 23
x = 'pepe'
x = true
console.log(x)

const y = 34
console.log(y)


const obj = {user:'Pepe', edad:34 }
const amigos = ['Juan','Rosa']

obj.edad = 35
amigos.push("Raul")

//declaracion
function algo(a = 0, b = 0){

    console.log("a vale " + a + " b vale " + b)

}

algo(8)

//asignacion
const otra = function (a=0, b=0) {
    console.log(a+b)
}

otra.propiedad = 'Cosa rara'

otra(2)

console.log(otra)
console.log(otra.propiedad)

//funciones arrow

const unaMas = () => {}
//const cuadrado = (a) => {return a*a}
const cuadrado = a => a*a

const verCuadrado = a => console.log(a*a)

//setTimeout(() => {console.log(cuadrado(5))}, 2000)
setTimeout(verCuadrado, 2000)
const data = [3,6,2,9,4,6]
const dataCuadrados = []

for(const item of data){
    dataCuadrados.push(item*item)
}

console.log(data, dataCuadrados)

//data.forEach(item) => dataCuadrados.push(item*item))

const dataCuadradoss = data.map(item => item*item)


const dataPares = dataCuadradoss.filter(item => !(item%2))

const sumaTotal = dataPares.reduce( (a, b) => a+b)

console.log(data, dataCuadradoss, dataPares, sumaTotal)

let name = 'Pepe'
const cadena = `Template 
string : ${name}`
name = 'Maria'
console.log(cadena)
/*{
    let v1 = 34
} da error por el ambito*/

{
    var v1= 34
}
console.log(v1)

const media = (...aDatos) => {
    return aDatos.reduce( (a,b) => a + b ) / aDatos.length
}

console.log(media(2,4,6,7))

//Clonado de objetos

const obj1 = {user : 'pepe', clave : {
    id:23, dpto:1
}}
const obj2 =Object.assign({}, obj1)
const obj3 = {...obj1}
const obj4 = JSON.parse(JSON.stringify(obj2))


obj3.user = 'Juan'
obj3.clave.id = 0

obj2.clave= 0
console.log(obj1)
console.log(obj2)

const numbers=  [4,5,6,7]
const clonNumbers = [...numbers]
clonNumbers.push(12)
console.log(numbers, clonNumbers)

let hoy = new Date()
console.log(hoy)