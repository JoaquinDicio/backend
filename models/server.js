require('dotenv').config()
const express = require ('express')
const cors = require('cors');
const dbConection = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env._PORT;
        this.databaseConection() //conects the server to db
        this.middlewares(); //setting up the middlewares
        this.routes(); //setting up the routes
    }

    async databaseConection() {
        await dbConection()
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use( express.json() ) //para definir que nuestro servidor se comunica en JSON
    }

    async connectDb(){
        await dbConnection()
    }

    routes(){
        this.app.use('/api/users', require('../routes/users.routes'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server is running now')
        })
    }

}

module.exports = Server