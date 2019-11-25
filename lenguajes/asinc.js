/*
function algoAsin(callback ){
    setTimeout( () => {
        let x = 23
        callback(x)
    }, 2000)
}


console.log('1')
let x = setTimeout(() => {
    console.log('2')
    return 1
}, 0)
console.log('3')
setTimeout(() => {
console.log('4',x)}, 2000)
console.log('5')
console.log('6')



algoAsin((x) => console.log(x))

ASINCRONIA
*/

function algoAsinc(){
    return new Promise( (resolve, reject) => {
        let n = Math.random()
        setTimeout( () => {
            if(n > 0.5) {
                //ok
                resolve(n)                
            }else{
                //error
                reject(new Error(n))
            }
        }, 2000)
    })
}

algoAsinc()
.then( response => console.log('Todo bien ' + response) )
.catch( error =>  console.error('Error ' + error.message) )
//Y ahora...

//ES2017 async / await

let x = 21; //punto y coma exigido única y exclusivamente en este contexto


(async () => {
    try{
        let response = await algoAsinc()
        console.log('Todo bien ' + response)
    }catch(error){
        console.error('Error ' + error.message)
    }
})()


/*
(() => {
    console.log('soy main')
})()*/