const { read } = require('./read')
const { write } = require('./write');

const update = (tituloBuscado, nuevaDescripcion) => {
    const data = read()
    const arrayEditado = data.map((tarea) => {
        if (tarea.titulo === tituloBuscado) {
            return { titu: tituloBuscado, descripcio: nuevaDescripcion }
        }
        return tarea
    })
    write(arrayEditado)
    console.log("Editado Correctamente");
}
module.exports = { update }