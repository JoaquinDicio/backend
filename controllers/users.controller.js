function getUsers( req,res ){

    res.send('Get usuarios')

}
function postUsers( req,res ){

    const {nombre,edad} = req.body;
    res.send(nombre+' '+edad+' Years')

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
