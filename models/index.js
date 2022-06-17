// BOILER PLATE //
// require mongoose package (step 1)
const mongoose = require('mongoose')
// tell mongoose to connect to the mongo URI (step 2 & 3)
const uri = 'mongodb://127.0.0.1/introPractice425'
mongoose.connect(uri)

// In order to debug - use some db connection methods for console logs
const db = mongoose.connection

db.once('open', () => {
    console.log(`link mongodb connection @ ${db.host}:${db.port}`)
})

//failure
db.on('error', err => {
    console.warn('The datacenter has burned to the ground.', err)
})

// export all of our models from this file. 

module.exports = {
    Drink: require('./drink')
}