require('dotenv').config()
const server = require('./api/server')

const port = process.env.PORT || 4994

server.listen(port, () => {
	console.log(`\n*^^*~~Server Alive on PORT:${port} ~~*^^*`)
})
