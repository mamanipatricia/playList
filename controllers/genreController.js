// import { makeSlug } from '../helpers/stringUtil.js';
const { makeSlug } = require('../helpers/stringUtil')
const genreModel = require('../models').genre;

async function genreList() {
    return await genreModel.findAll();
    // return "hola llegue al genre controller";
}
async function createGenre(body) {
    const genreData = {
        name: body.name,
        slug: makeSlug(body.name),
    }
    return await genreModel.create(genreData);
}

async function showGenre(id) {
    return await genreModel.findByPk(id)
    .then(genre => {
        if (!genre) {
            throw "Genre not found"
        }
    })
    .catch((err) => {
        throw "This a disctint error" + err;
    });
}

async function deleteGenre(id) {
    // const genre = await genreModel.findByPk(id)
    const genre = await showGenre(id)
    await genre.destroy();
}

async function updateGenre(id, name) {
    const genre = await showGenre(id);
    genre.name = name;
    genre.slug = makeSlug(name);
    await genre.save()
    return genre;
}

module.exports = {
    genreList,
    createGenre,
    showGenre,
    deleteGenre,
    updateGenre,
}
