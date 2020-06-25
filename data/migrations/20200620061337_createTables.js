exports.up = function (knex) {
	return knex.schema.createTable('user', (tbl) => {
		tbl.increments()
		tbl.string('name', 255).notNullable()
		tbl.integer('zip').notNullable()
		tbl.string('state', 255).notNullable()
		tbl.string('email', 255).notNullable().unique()
		tbl.string('password', 255).notNullable()
  })
    .createTable('issues', (tbl) => {
      tbl.increments()
      tbl.string('name', 255).notNullable()
      tbl.string('desc', 255).notNullable()
			tbl.integer('zip').notNullable()
			tbl.string('state', 255).notNullable()
		  tbl.string('image', 255).notNullable()
			tbl.integer('vote')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('issues')
  .dropTableIfExists('user')
}
