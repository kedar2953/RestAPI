const express = require('express');
const router = express.Router();

// Import Controller
const {createGame} = require('../controllers/gameController');
const {getAllGames} = require('../controllers/gameController');
const {getGameById} = require('../controllers/gameController');
const {updateGame} = require('../controllers/gameController');

// Mapping Of Routes with Controllers
router.post('/game/create' , createGame);
router.get('/game' , getAllGames);
router.get('/game/:id' , getGameById);
router.put("/updateGame/:id",updateGame);

// Export
module.exports = router ;