const mongoose = require('mongoose')

async function dbConnection(){

    try {
        await mongoose.connect(process.env._MONGO_CNN,{
            autoIndex:true
        })
    } catch(error){
        console.log(error)
        throw new Error ('Error en mongoDB')
    }

}

module.exports = {
    dbConnection
}