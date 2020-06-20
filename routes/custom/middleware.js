const Users = require('../../routes/users/user_model')
const Issue = require('../../routes/issues/issue_model')

const validUserId = (req, res, next) => {
	const { id } = req.params
	Users.getById(id).then((user) => {
		user ? req.user : res.status(400).json({ message: 'Invalid User ID!' })
		next()
	})
}

const validIssueId = (req, res, next) => {
	const { id } = req.params
	Issue.getById(id).then((issue) => {
		issue ? req.issue : res.status(400).json({ message: 'Invalid Issue ID!' })
		next()
	})
}


module.exports={
	validUserId,
	validIssueId,
}