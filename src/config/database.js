const mongoose =  require('mongoose')
const { config } = require('dotenv')

config()

async function connect(uri){
   try {
    mongoose.connect(uri || Process.env.MONGO_DB_LOCAL)
    console.log('connected to mongoDB')
   } catch (error) {
    console.log(error.message)
   }
}
module.exports = connect