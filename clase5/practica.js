//1- Crea una función que reciba un array de números como argumento 
//y devuelva el número más grande del array.

let numeros= [12,15,78,98]
 const numeroMayor = (numeros)=>{
    return Math.max(...numeros);// ... significa desestructurar separa los valores de un array 
 }
  const resultado= numeroMayor(numeros)
  console.log(resultado)
//2- Crea una función que reciba dos arrays como argumentos y devuelva 
//un nuevo array que contenga los elementos comunes entre ambos arrays.
let paises =  ['Argentina', 'Chile','Bolivia', 'EE.UU','Mexico']
let americaSur= [ 'Argentina', 'Chile', 'Bolivia']

const  argumentos = (pasies,americaSur)=>{
    return paises.filter((valor)=>americaSur.includes(valor))
    
}
const resultado1= argumentos(paises,americaSur)
console.log(resultado1)
//3- Crea una función que reciba una cadena de texto como argumento y devuelva 
//un nuevo string con todas las letras en mayúsculas.


 const convetrirMayusculas = (string)=>{
    return string.toUpperCase()
} 
const result = convetrirMayusculas('alejandro')
console.log(result)

//4- Crea una función que reciba una cadena de texto como argumento y devuelva un nuevo 
//string con todas las palabras en orden inverso.
const palabraInvertida = (string)=>{
    return string.split(" ").reverse().join("")
}
const result1= palabraInvertida('Hola chicos como estan')
console.log(result1)
//1. Crea una función que devuelva el número PI con dos decimales.
// Utiliza la variable PI que ya existe en javascript
const  devuelvePi = (PI)=>{
    const devuelve = (Math.PI.toFixed(2))
    return devuelve

}
 console.log(devuelvePi())


const {suma}= require('./practica1')


 


