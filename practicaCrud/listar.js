const {read}= require('./read');

const listar= (titulo)=>{
    const data = read();
return data.map((tarea)=>tarea.titulo)

}

module.exports={listar};