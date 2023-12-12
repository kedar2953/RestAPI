const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
});

// Exports
module.exports = mongoose.model("products",gameSchema);