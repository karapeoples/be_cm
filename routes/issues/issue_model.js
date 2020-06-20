const db = require('../../data/dbConfig')

const get = () => {
	return db('issues')
}

const getById = (id) => {
	return db('issues').where({ id }).first()
}
const add =(issue) =>{
	return db('issues')
		.insert(issue)
		.then((ids) => {
			return getById(ids[0])
		})
}

const update = (id, data) => {
	return db('issues').where({ id }).update(data)
}

const erase = (id) => {
	return db('issues').where('id', id).del()
}

module.exports = {
	get,
  getById,
  add,
	update,
	erase,
}
