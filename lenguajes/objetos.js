
//Notacion literales o JSON
obj = { user: 'Pepe', edad:23 }
// obj  = new Object()

datos = [4,6,8]
// datos = new Array(4,6,8)

const exp = /1/
//exp = new RegExp()

//Otros objetos en JS
const hoy = new Date()
const error = new Error()

// No instanciables

JSON
Math.PI

function Persona(nombre, edad) {

    this.nombre = nombre
    this.edad = edad

}

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`)
}

const p1 = new Persona('Luis', 26)
const p2 = new Persona('Elena', 26)
const p3 = new Persona('Rosa', 26)

delete p2.edad
p2.color = 'Amarillo'

console.log(p1)
p1.saludar()
p2.saludar()
p3.saludar()
console.log(p1, p2, p3)

