const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuarios')

function getUsers( req,res ){

    res.send('Get usuarios')

}
async function postUsers( req,res ){

    //desestructuring user object
    const {nombre,correo,password,rol}= req.body;
    const usuario = new Usuario({nombre,password,rol,correo}); //creating a new instance
    
    //watching for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors)

    //looking for the same email in db
    const coincidence = await Usuario.findOne({ correo:correo })
    if (coincidence) return res.status(400).json({
        msg:'El correo ya esta registrado'
    })
    //encrypting
    const salt = bcryptjs.genSaltSync() //this number defines the difficult of the encrypt system
    usuario.password = bcryptjs.hashSync( password.toString(), salt ) //encrypt the password
    
    //saving new user on db
    await usuario.save()
    res.send(usuario)

}
function deleteUsers( req,res ){
    const {id} = req.params
    res.send('Eliminado usuario'+id)

}
function putUsers( req,res ){

    res.send('Put usuarios')

}
module.exports={
    getUsers,
    postUsers,
    deleteUsers,
    putUsers
}
