
const {read} = require('./read')


function find(tituloBuscar){
    //leer y guardar enuna variable el array de data json
    const data =read()
    return data.some((tarea)=>tarea.titulo ===tituloBuscar)
}
 module.exports={find}