// Definición de nuestro servidor


const express = require('express')
const kodersRouter = require('./routers/koders')

const server = express()

// middlewares

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