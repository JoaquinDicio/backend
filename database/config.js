const mongoose = require ('mongoose');

async function dbConection(){
    try{
        await mongoose.connect(process.env._MONGODB_CNN)
        console.log('Conncted to db')
    }
    catch{
        throw new Error('Error a la hora de conectarse a la base de datos')
    }

}

module.exports = dbConection
