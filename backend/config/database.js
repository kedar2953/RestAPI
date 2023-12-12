const mongoose = require('mongoose');

require("dotenv").config();

const connectDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( () => {console.log("Connection to Database Successfull")})
    .catch((err)=>{
        console.log("Connection to DB Failed")
        console.log(err) 
        process.exit(1);
    })
}

module.exports = connectDb ;