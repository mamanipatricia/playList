'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    photo: DataTypes.TEXT,
    slug: DataTypes.STRING
  }, {});
  artist.associate = function (models) {
    // associations can be defined here
    artist.belongsToMany(models.song, {
      through: 'song_artist',
      as: 'songs',
      foreignKey: 'id_artist'
    });
  };
  return artist;
};