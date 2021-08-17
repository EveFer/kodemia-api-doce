const Koder = require('../models/koders')
const bcrypt = require('../lib/bcrypt')

function getAll () {
  return Koder.find()
}

async function create (koderData) {
  const { email, password } = koderData
  const koderFound = await Koder.findOne({ email })

  if (koderFound) throw new Error('Email of koder exists already')

  // Encriptar el password
  const encryptedPassword = await bcrypt.hash(password)

  return Koder.create({ ...koderData, password: encryptedPassword })
}

function deleteById (id) {
  return Koder.findByIdAndDelete(id)
}

function updateById (id, newData) {
  return Koder.findByIdAndUpdate(id, newData, { new: true, runValidators: true })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
