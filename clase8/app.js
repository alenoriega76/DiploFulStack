const {read}= require('./crud/read')
const {create}= require('./crud/create');
const { actualizar} = require('./crud/update');
const { borrarTitulo } = require('./crud/delete');
//const {update2}=require('./crud/update');
const {list }= require('./crud/list')
const {find}= require('./crud/find');
const data = process.argv

const comand = (comand,param1,param2)=>{
    console.log(comand)
    switch (comand) {
        case "read":
            console.log(read())
            break;
        case "create":
            create(param1,param2)
            break;
        case "actualizar":
            actualizar(param1,param2)
            break;
        case "borrarTitulo":
            borrarTitulo(param1)
                break;
        case "find":
            console.log(find(param1))
            break;
        case "list":
            console.log(list())           
        default:
            console.log(" no se encontro ningun comando")
            break;
    }
};
comand(data[2],data[3],data[4])