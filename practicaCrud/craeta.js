
const fs= require('fs');
const {read}= require('./read')
const {write}= require('./write')

const create= (titulo, descripcion)=>{
    data=read()
    data.push(nuevatarea);
    write(data)
return Console.log(" Creado con exito")
}

module.exports={create}