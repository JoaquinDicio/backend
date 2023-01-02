const { Router } = require('express')
const { getUsers,postUsers,deleteUsers,putUsers } = require('../controllers/users.controller')
const router = Router ()

router.get('/', getUsers )
router.post('/', postUsers )
router.put('/:id', putUsers) //recibe el parametro id
router.delete('/:id', deleteUsers) //recibe el parametro id

module.exports = router