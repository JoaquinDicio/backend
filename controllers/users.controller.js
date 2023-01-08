const Usuario = require('../models/usuarios')

function getUsers( req,res ){

    res.send('Get usuarios')

}
async function postUsers( req,res ){

    const body= req.body;
    const usuario = new Usuario(body); //creating a new instance
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
