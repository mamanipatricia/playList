const { makeSlug } = require('../helpers/stringUtil');
const songModel = require('../models/').song;
const song_artist_Model = require('../models/').song_artist;
const genreModel = require('../models/').genre;
const artistModel = require('../models/').artist;

async function createASong(body) {
    try {

        const t = await require('../models/').sequelize.transaction();
        // return await require('../models/').sequelize.transaction(async  t => {

        const songData = {
            title: body.title,
            released: body.released,
            cover: body.cover,
            genreId: body.genreId,
            slug: makeSlug(body.title),
        }
        const songToSave = await songModel.create(songData, { transaction: t });

        console.table(body.artist);
        for (let index = 0; index < body.artist.length; index++) {
            const element = body.artist[index];

            // body.artist.forEach(async element => {
            await song_artist_Model.create({
                id_song: songToSave.id,
                id_artist: element,
                // id_artist: body.artist[0],
            }, { transaction: t })
            // });
        }
        await t.commit()
        return songToSave;
    } catch (err) {
        console.log(err);
        // console.log(err);
        // await t.rollback();
    }

}

async function displaySongs() {
    return await songModel.findAll({
        include: [
            {
                model: genreModel,
                // as: 'genre'
            },
            {
                model: artistModel,
                // as: artist
            }
        ]
    });
}

async function updateSong() {
    return await songModel.findAll({
        include: [
            {
                model: genreModel,
                // as: 'genre'
            },
            {
                model: artistModel,
                // as: artist
            }
        ]
    });
}


module.exports = {
    createASong,
    displaySongs,
    updateSong,
}
