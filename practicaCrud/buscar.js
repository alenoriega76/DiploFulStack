const {read}= require('./read')


const buscar=(tituloBuscar)=>{
    const data = read()
    return data.some((tarea)=> tarea.titulo === tituloBuscar)

}
module.exports={buscar}