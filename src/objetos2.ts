
interface Animal {
    especie : string
}


class Perro implements Animal {
    constructor(
        public especie: string
    ){}
    ladrar (){
        console.log('guau')
    }

}

let bicho1: Perro;
let bicho2: Animal;

bicho1 = new Perro('Perro')
bicho2 = {especie: 'Perro'}

console.log(bicho1, bicho2)