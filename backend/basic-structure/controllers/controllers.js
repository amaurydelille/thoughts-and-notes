const user = require('../services/user.services');

async function get(req, res) {
    try {
        const message = await user.get()
        res.status(200).json(message)
    } catch(err) {
        res.status(500).json(err)
    }
}

async function create(req, res) {
    try {
        const newUser = req.body.user
        res.status(200).json(await user.create(newUser))
    } catch(err) {
        res.status(500).json(err)
    }
}

async function remove(req, res) {
    try {
        const toDeleteUser = req.body.user
        res.status(200).json(await user.remove(toDeleteUser))
    } catch(err) {
        res.status(500).json(err)
    }
}

async function update(req, res) {
    try {
        const toUpdateUser = req.body.user
        res.status(200).json(await user.remove(toUpdateUser))
    } catch(err) {
        res.status(500).json(err)
    }
}

async function auth(req, res) {
    try {
        const authUser = req.body.user
        res.status(200).json(await user.auth(authUser))
    } catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    create, 
    remove,
    update,
    auth,
    get
}

