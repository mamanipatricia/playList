'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    title: DataTypes.STRING,
    released: DataTypes.DATE,
    cover: DataTypes.TEXT,
    slug: DataTypes.STRING
  }, {});
  song.associate = function (models) {
    // associations can be defined here
    song.belongsTo(models.genre, {
      // as: 'genre'
    }) // una cancion solo tiene un genero...
    song.belongsToMany(models.artist, {
      through: 'song_artist',
      // as: 'artists',
      foreignKey: 'id_song'
    }); // una cancion tiene muchos artistas...
  };
  return song;
};