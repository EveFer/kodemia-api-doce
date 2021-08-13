const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
      const allKoders = await koders.getAll()
      response.json({
          success: true,
          message: 'All Koders',
          data: {
              koders: allKoders
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const koderData = request.body
        const koderCreated = await koders.create(koderData)
         response.json({
             success: true,
             message: 'Koder Created',
             data: {
                 koder: koderCreated
             }
         })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const koderDeleted = await koders.deleteById(id)
        response.json({
            success: true,
            message: 'Koder deleted',
            data: {
                koder: koderDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const { body: koderData } = request

        const koderUpdated = await koders.updateById(id, koderData)

        response.json({
            success: true,
            message: 'Koder updated',
            data: {
                koder: koderUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

module.exports = router