const express = require('express')
const router = express.Router()
const Issues = require('./issue_model')
const mw = require('../custom/middleware')
const validIssueId = mw.validIssueId


router.get('/', (req, res) => {
	Issues.get()
		.then((issue) => {
			res.status(200).json(issue)
		})
		.catch((err) => {
			res.status(418).json({ error: 'I am a Teapot' })
		})
})

router.get('/:id', validIssueId, (req, res) => {
	const { id } = req.params
	Issues.getById(id)
		.then((issue) => {
			res.status(200).json(issue)
		})
		.catch((err) => {
			res.status(418).json({ error: 'I am a Teapot' })
		})
})

router.post('/', (req, res) => {
Issues.add(req.body)
	.then((issue) => {
				res.status(201).json({message:"A New Issue was Discovered", issue})
			})
			.catch((error) => {
				res.status(418).json({ error: 'I am a Teapot!' })
			})
})

router.put('/:id', validIssueId, (req, res) => {
	const { id } = req.params
	const { name, desc, state, zip, image, vote } = req.body
	const issueObject = {
    name: name,
    desc: desc,
    state: state,
    zip: zip,
    image: image,
    vote:vote,
	}
	Issues.update(id, issueObject)
		.then((issue) => {
			res.status(200).json({ success: 'Info Updated!', info: issueObject })
		})
		.catch((err) => {
			res.status(418).json({ error: 'I am a Teapot' })
		})
})

router.delete('/:id', validIssueId, (req, res) => {
	const { id } = req.params
	Issues.getById(id)
		.then((issue) => {
			issue
				? Issues.erase(id).then((deleted) => {
						deleted ? res.status(200).json({ success: `Issue ${id} was deleted!`, issue }) : null
				  })
				: null
		})
		.catch((err) => {
			res.status(418).json({ error: 'I am a Teapot' })
		})
})

module.exports = router
