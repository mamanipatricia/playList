'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  genre.associate = function(models) {
    // associations can be defined here
    genre.hasMany(models.song, {
      as: 'songs'
    }) // {as: 'songs'}  por que un genero pertenece a muchas canciones
  };
  return genre;
};