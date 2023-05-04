const fs= require('fs');
const {read}= require('./read')
const {write} = require('./write');

const borrar = (tituloABorrar)=>{
    const data = read()
    const tituloFiltardo= data.filter((tarea)=>tituloABorrar != tituloFiltardo)
    write(tituloFiltardo);
    console.log("Borrado con éxito")
}
module.exports={borrar}