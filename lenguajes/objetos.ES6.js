class Persona {

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
        
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`)
    }

}

const p1 = new Persona('Pepe', 25)
const p2 = new Persona('Elena', 32)


console.log(p1, p2)
p1.saludar()
p2.saludar()

class Alumno extends Persona{
    
    constructor(nombre, edad, curso){
        super(nombre, edad)
        this.curso = curso
    }
    saludar(){
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }

}

const a1 = new Alumno('Ernesto', 32, 'Angular')
a1.saludar()