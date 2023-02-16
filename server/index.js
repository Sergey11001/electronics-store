const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const routes = require("./routes");
const PORT = process.env.PORT
const app = express()
app.use('/api', routes)
app.use(cors())
app.use(express.json())


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log("Server is starting on", PORT)
        })
    }
    catch (e){
        console.log(e)
    }
}

start()