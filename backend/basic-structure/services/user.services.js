const db = require('./db.services')

const create = async (user) => {
    db.query('CREATE ?', user)
    const message = `user ${user} created!`
    return { message }
}

const update = async (user) => {
    db.query('UPDATE ?', user)
    const message = `user ${user} updated!`
    return { message }
}

const get = async () => {
    db.query('GET')
    const message = 'users listed!'
    return { message }
}

const remove = async (user) => {
    db.query('REMOVE ?', user)
    const message = `user ${user} removed!`
    return { message }
}

const auth = async (user) => {
    if (await db.query('GET ?', user)) {
        const message = `user ${user} logged in!`
        return { message }
    }
    else {
        const message = `no user ${user} existing with these credentials!`
        return { message }
    }
}

module.exports = {
    create,
    remove,
    get,
    update,
    auth
}