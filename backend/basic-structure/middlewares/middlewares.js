function isAuthenticated(req) {
    return req.user != undefined
}

function authenticate(res, req, next) {
    if (isAuthenticated)
        next()
    else
        res.status(401) // 401: unauthorized
}

module.exports = {
    authenticate
}