const express = require('express');
const router = express.Router();

const Controller = require('../controllers/artistController');

// routes..
router.get('/', listArtist);
router.get('/:id', displayAnArtist);
router.post('/', createArtist);
router.put('/:id', updateArtist);
router.delete('/:id', destroyArtist);
router.get('/:id/songs', displayArtistSong);

function listArtist(req, res, next) {
    Controller.listArtist()
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function createArtist(req, res, next) {
    Controller.createArtist(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function updateArtist(req, res, next) {
    Controller.updateArtist(req.params, req.body)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function destroyArtist(req, res, next) {
    Controller.destroyArtist(req.params.id)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function displayAnArtist(req, res, next) {
    Controller.displayAnArtist(req.params.id)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}

function displayArtistSong(req, res, next) {
    Controller.displayArtistSong(req.params.id)
    .then(response => {
        res.send(response);
    })
    .catch(next);
}



module.exports = router;