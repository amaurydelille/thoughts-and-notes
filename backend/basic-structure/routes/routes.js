const router = require('express').Router()
const user = require('../controllers/controllers')
const middleware = require('../middlewares/middlewares')

router.get('/', user.get);
router.post('/', user.create);
router.delete('/:id', user.remove);
router.put('/:id', user.update);
router.post('/', user.auth, middleware.authenticate); 

module.exports = router
