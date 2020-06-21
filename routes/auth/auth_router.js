const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { jwtSecret } = require('./config/secret')
const regUser = require('./auth_model')

const generateToken = (user) => {
	const payload = {
		username: user.username,
	}

	const options = {
		expiresIn: '1h',
	}
	return jwt.sign(payload, jwtSecret, options)
}

router.post('/register', (req, res) => {
	const { email, password, state, zip, name } = req.body
	const rounds = process.env.BCRYPT_ROUNDS || 8
	const hash = bcryptjs.hashSync(password, rounds)
	const userObject = {
		name: name,
		zip: zip,
		state:state,
		email: email,
		password: hash,
	}
	let user_id = req.body.id
		const token = generateToken(userObject)

	if (userObject) {
		regUser
			.add(userObject)
			.then((user) => {
				res.status(201).json({ user: userObject, user_id: user_id, token: token })
			})
			.catch((error) => {
				res.status(418).json({ error: 'I am a Teapot!' })
			})
	} else {
		res.status(400).json({
			message: 'please provide all required information',
		})
	}
})

router.post('/login', (req, res) => {
	const {  email, password } = req.body
	let user_id = req.body.id
	if (req.body) {
		regUser
			.findBy({ email: email })
			.then(([user]) => {
				// compare the password the hash stored in the database
				if (user && bcryptjs.compareSync(password, user.password)) {
					const token = generateToken(user)
					res.status(200).json({  user:user, user_id:user_id, token:token })
				} else {
					res.status(401).json({ message: 'Invalid credentials' })
				}
			})
			.catch((error) => {
				res.status(418).json({ error: 'I am a Teapot' })
			})
	} else {
		res.status(400).json({
			message: 'please provide email and password',
		})
	}
})

module.exports = router
