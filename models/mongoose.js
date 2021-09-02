const mongoose = require(`mongoose`)
require(`dotenv`).config()

const connection = mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log(`connected to DB`)
})

module.exports = connection;