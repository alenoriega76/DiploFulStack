/* function saludar(nombre) {
    return console.log("Hola como estas hoy ? " + nombre
    )
}
saludar("Alejandro")


  let  primero = cities[0]
    console.log(primero)
  let ultimo = cities[cities.length-1]
  console.log(ultimo)

  cities.forEach(function(cities,index){
    console.log `${index}`
  }) */
  
let cities = ['Ingland', 'United States','Belgiun', 'Germany'] ;
console.log(cities.length)

let nuevoElemento = cities.push('Argentina')

 let  nuevoElemento1 = cities.unshift('Brazil')
 console.log(cities)
let ultimo= cities.pop()
let primero = cities.shift()
let pos = cities.indexOf('United States')
console.log(pos)

const {dividir }=require('./clase4/division');
const {sumar} = require('./clase4/suma');
const {restar}= require('./clase4/resta');
const {multiplicar}= require('./clase4/multiplicacion');





