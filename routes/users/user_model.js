const db = require('../../data/dbConfig')


const get = () =>{
  return db('user')
}

const getById = (id) => {
  return db('user')
		.where({ id })
		.first()
}

const update = (id, data) => {
return db('user').where({ id }).update(data)
}

const erase = (id) => {
return db('user').where('id', id).del()
}




 module.exports ={
  get,
  getById,
  update,
  erase,
 }