const db = require('../../data/dbConfig')

module.exports = {
	add,
	find,
	findBy,
	findById,
}

function find() {
	return db('user').select('id', 'username').orderBy('id')
}

function findBy(filter) {
	return db('user').where(filter).orderBy('id')
}

function add(user) {
	return db('user')
		.insert(user, 'id')
		.then((ids) => {
			return findById(ids[0])
		})
}

function findById(id) {
	return db('user').where({ id }).first()
}
