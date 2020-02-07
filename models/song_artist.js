'use strict';
module.exports = (sequelize, DataTypes) => {
  const song_artist = sequelize.define('song_artist', {
    id_song: DataTypes.INTEGER,
    id_artist: DataTypes.INTEGER
  }, {});
  song_artist.associate = function(models) {
    // associations can be defined here
  };
  return song_artist;
};