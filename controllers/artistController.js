const { makeSlug } = require('../helpers/stringUtil');
const artistModel = require('../models/').artist;
const songModel = require('../models/').song;

async function listArtist() {
    return await artistModel.findAll();
}

async function createArtist(body) {
    const artistData = {
        name: body.name,
        photo: body.photo,
        slug: makeSlug(body.name),
    }
    return await artistModel.create(artistData);
}

async function updateArtist(params, body) {
    const artist = await artistModel.findByPk(params.id);
    artist.name = body.name;
    artist.photo = body.photo;
    artist.slug = makeSlug(body.name);
    await artist.save();
    return artist;
}

async function destroyArtist(id) {
    const artist = await artistModel.findByPk(id);
    await artist.destroy();
}

async function displayAnArtist(id) {
    return await artistModel.findByPk(id);
}

async function displayArtistSong(id) {
    return await artistModel.findByPk(id, {
        include: [
            {
                model: songModel,
                as: 'songs'
            }
        ]
    });
}

// del artista juan perez sacar todas sus canciones


module.exports = {
    listArtist,
    createArtist,
    updateArtist,
    destroyArtist,
    displayAnArtist,
    displayArtistSong,
}