const mongoose = require("mongoose"); 


const animalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, `name is required`]
    },
    race: {

        type: String,
        required: [true, `race is required`]

    },
    gender: {

        type: String,
        required: [true, `gender is required`]


    }


})

const Animal = mongoose.model('Animal', animalSchema);


module.exports = Animal; 