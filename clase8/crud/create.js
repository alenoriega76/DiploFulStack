const {read}= require('./read')
const {write}= require('./writeJson')


 function create(titulo,descripcion){
    const  data= read()// traemos el array
    const nuevaTarea= {titulo,descripcion}// objeto 
    data.push(nuevaTarea)
    write(data);
     return console.log("Creado con Exito")
 }

 module.exports={create};
 