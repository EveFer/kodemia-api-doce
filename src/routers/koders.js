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

module.exports = router