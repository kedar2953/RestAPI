const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
require("dotenv").config;
const PORT = process.env.PORT || 4000 ;

app.use(express.json());

// Import API Routes
const gameRoutes = require('./routes/game');

// Mounting API Routes
app.use('/api/v1',gameRoutes);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT,()=>{
    console.log(`Server Started At Port ${PORT}`);

})

app.get("/",(req,res)=>{
    res.send("Aajao Aajao Welcome");
})