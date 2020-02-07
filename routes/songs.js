const express = require('express');
const router = express.Router();

const Controller = require('../controllers/songController');

// routes..
router.post('/', createASong);
router.get('/', displaySongs);
router.get('/:id', updateSong);


// functions
function createASong(req, res, next) {
    Controller.createASong(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function displaySongs(req, res, next) {
    Controller.displaySongs()
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function updateSong(req, res, next) {
    Controller.updateSong(req.params.id)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

module.exports = router;