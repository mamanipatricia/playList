const express = require('express');
const router = express.Router();

const Controller = require('../controllers/genreController');

// routes..
router.get('/', genreList);
router.post('/', createGenre);
router.get('/:id', showGenre);
router.delete('/:id', deleteGenre);
router.patch('/:id', updateGenre);

// functions...
function genreList(req, res, next) {
    Controller.genreList()
        .then(response => {
            res.send(response)
        })
        .catch(next);
}

function createGenre(req, res, next) {
    Controller.createGenre(req.body)
        .then(response => {
            res.send(response)
        })
        .catch(next);
}

function showGenre(req, res, next) {
    Controller.showGenre(req.params.id)
        .then(response => {
            res.send(response)
        })
        .catch(next);
}

function deleteGenre(req, res, next) {
    Controller.deleteGenre(req.params.id)
        .then(response => {
            res.send(response)
        })
        .catch(next);
}

function updateGenre(req, res, next) {
    Controller.updateGenre(req.params.id, req.body.name)
        .then(response => {
            res.send(response)
        })
        .catch(next);
}

// router.post('/', function (req, res, next) {
//     res.send('crear un g...');
// });

router.put('/:id', function (req, res, next) {
    res.send('actulizar ...');
});

router.delete('/:id', function (req, res, next) {
    res.send('eliminar...');
});


module.exports = router;