const Game = require ("../models/gameModel");

exports.createGame = async(req,res) =>{
    try {
        // Taking Title And Data From Req ki Body
        const {name,genre,rating} = req.body ;

        // Creating A New Object of Post
        const game = new Game({name,genre,rating});
        
        // Adding Above Created Post object in Database
        const updatedGame = await game.save();

        res.status(200).json({
            game:updatedGame
        })
    } catch (error) {
        return res.status(500).json({
            error:"Error While Adding Game in Database"
        });
    }
}

exports.getAllGames = async(req,res) =>{
    try {
        const posts = await Game.find();
        res.json({
            posts:posts
        })
    } catch (error) {
        return res.status(500).json({
            error:"Post Fetch Karne Mein Error Aaya"
        });
    }
}


exports.getGameById = async(req,res) =>{
    try {
        // Get Id
        const id = req.params.id;

        // Get All Details with Given Id
        const response = await Game.findById( {_id:id} );

        if(!response){
            return res.status(400).json(
                {
                    success:false,
                    message:"Entry Not Found!!"
                }
            )
        }
        // 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:`Game with id ${id} Fetched Successfully`
            }
        );
    } 
    
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Error While Fetching Data",
                message:err.message
            }
        );
    }
}


exports.updateGame = async(req,res) =>{
    try {
        // Get ID
        const {id} = req.params;

        // Get All Details
        const {achievements} = req.body;

        // Update
        const response = await Game.findByIdAndUpdate(
            {_id:id},
            {$set:{achievements:achievements}}
        )

        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Given Data is Updated Successfuly'
            }
        );
    } 
    
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Kuch error agaya re hehehehe",
                message:err.message
            }
        );
    }
}