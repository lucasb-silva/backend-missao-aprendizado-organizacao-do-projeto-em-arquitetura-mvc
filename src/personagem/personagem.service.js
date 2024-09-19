const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection() {
  return getDatabase().collection('personagem')
}

function readAll() {
  // Acessamos a lista de personagens no collection do MongoDB
  return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  // Retornar o item na collection usando o ID
  return getCollection().findOne({ _id: new ObjectId(id) })
}

function create(newItem) {
  // Adicionamos na collection
  return getCollection().insertOne(newItem)
}

function updateById() {
}

function deleteById() {
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}