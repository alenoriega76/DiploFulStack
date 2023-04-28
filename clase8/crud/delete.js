const { fs } = require('fs');
const {read}=require('./read');
const {write}= require('./writeJson');

function borrarTitulo (tituloBorrar){
    const data= read();
    const tareaFiltrada=data.filter((tarea)=>tarea.titulo != tituloBorrar  )
    write(tareaFiltrada)
    return  console.log("Borrado con éxito");

}

module.exports={borrarTitulo}