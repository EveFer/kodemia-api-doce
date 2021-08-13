// Definición de nuestro servidor


const express = require('express')
const kodersRouter = require('./routers/koders')

const server = express()

// middlewares
server.use(express.json())

// agregabamos los router
server.use('/koders', kodersRouter)


module.exports = server

// Requerimiento
// Endpoint GET /koders
// 1. Aseguranos que nuestro MODELO exista
// 2. Crear el caso de uso necesario.
// 3. Crear el enpoint ->


// POST /koders
// DELETE /koders/:id -> findByIdAndDelete()
// PATCH /koders/:id
// GET /koders/:id



// Practica casi final
// ---- Primera Parte ---- Obligatoria

//  Kodemia necesita poder gestionar mentores
// - crear mentores
// - actualizar
// - eliminar
// - obtener el detalle de un mentor por id
// - obtener todos los datos de los mentores

// name
// lastName
// module: ['Maquetado', 'JS', 'Cloud', 'Backend', 'React]
// gender:

// Document Fer:
/*
{
    "name": "Fernanda",
    "lastName": "Palacios",
    "module": ['Maquetado', 'backend],
    "gender": "Female"
}

*/

// Segunda Parte Plus
// Referencias.

// Kodemia tambien necesita gestionar sus celulas de mentores:
// ¿Que es una celula de mentores? Es un grupo de mentores que pueden ser asignados
//  aun grupo.
// Tiene un nombre que identifica
// Tiene que mentores pertenecen a dicha celula

// Que podamos crear celulas de mentores
// actualizarlas
// eliminarlas
// obtener detalle