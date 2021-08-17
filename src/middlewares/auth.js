const jwt = require('../lib/jwt')

function auth (request, response, next) {
  try {
    const { authorization: token } = request.headers
    console.log(token)

    const decodedToken = jwt.verify(token)

    if (!decodedToken) throw new Error('Not Authorized')

    console.log('data: ', decodedToken)
    request.userCurrent = decodedToken.id

    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Not Authorized',
      error: error.message
    })
  }
}

module.exports = auth
