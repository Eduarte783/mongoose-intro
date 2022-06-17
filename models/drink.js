// DEFINE A SCHEMA //
//require the mongoose package (step 1)
const mongoose = require('mongoose')

// define the schema (step 2)
const DrinkSchema = new mongoose.Schema({
    name:{
        type: String
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true
})
// turn the schema into a model and export it (step 3)
// syntax - mongoose.model(ModelName, ModelSchema)

module.exports = mongoose.model('Drink', DrinkSchema)