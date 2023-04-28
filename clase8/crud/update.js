const { read } = require('./read')
const { write } = require('./writeJson');


const actualizar = (tituloBuscar, descripcionNueva) => {
    const data = read()
    const arrayEditado = data.map((tarea) => {
        if (tarea.titulo === tituloBuscar) {
            return { titulo: tituloBuscar, descripcion: descripcionNueva }
        }
        return tarea;
    });
    write(arrayEditado);
    return console.log("Actualizado con exito")
}

// const update2 = (tituloBuscar, descripcionNueva) => {
//     const data = read()
//     const arrayEditado = data.filter((tarea) => tarea.titulo != tituloBuscar);
//     arrayEditado.push({ titulo: tituloBuscar, descripcion: descripcionNueva });
//     write(arrayEditado)
//     console.log("Actualizado con exito")
// }

//module.exports = { update2 }
module.exports = { actualizar }