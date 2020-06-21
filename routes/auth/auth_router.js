const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { jwtSecret } = require('./config/secret')
const Users = require('./auth_model')

const generateToken = (user) => {
	const payload = {
		username: user.username,
	}

	const options = {
		expiresIn: '1h',
	}
	return jwt.sign(payload, jwtSecret, options)
}


	router.post("/register", async (req, res) => {
		let { email, password, state, zip, name } = req.body;
		const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcrypt.hashSync(password, rounds);
  let userObj = {
    email: email,
    password: hash,
		name: name,
		state: state,
		zip: zip,
  };

  try {
    // add new user to the db
    let newUser = await Users.add(userObj);
    let newUserId = newUser.id;

    const token = generateToken(newUser);
    res
      .status(201)
      .json({ user: newUser, user_id: newUserId, token: token });
  } catch (error) {
    res
      .status(500)
      .json({ errorMsg: error, message: "Was not able to register user" });
  }
});

router.post('/login', async (req, res, next) => {
	if (!req.body || !req.body.password || !req.body.email) {
		next('A valid email and password are required.')
	} else {
		let { email, password } = req.body

		try {
			// find user by email
			const user = await Users.findBy({ email })

			if (user && bcrypt.compareSync(password, user.password)) {
				const roleInfo = await Users.findTypeById(user.id)
				const token = generateToken(user)
				res.status(200).json({ user: user, user_id: roleInfo, token: token })
			} else {
				res.status(401).json({ message: 'Invalid Login Credentials' })
			}
		} catch (error) {
			res.status(500).json({ errorMsg: error, message: 'Was not able to login user' })
		}
	}
})

module.exports = router
