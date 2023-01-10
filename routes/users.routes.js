const { Router } = require('express')
const {check,isEmail} = require('express-validator')
const { getUsers,postUsers,deleteUsers,putUsers } = require('../controllers/users.controller')
const router = Router ()

router.get('/', getUsers )
router.post('/',[
    check('correo','No es un correo valido').isEmail(),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña debe ser mayor a 6 caracteres').isLength({min:6}),
    check('rol','No es un rol valido').isIn(['admin','user'])
], postUsers ) //con tres argumentos, el del medio es middleware
router.put('/:id', putUsers) //recibe el parametro id
router.delete('/:id', deleteUsers) //recibe el parametro id

module.exports = router