'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('song_artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_song: {
        type: Sequelize.INTEGER,
        references: {
          model: 'songs',
          key: 'id',
          as: 'song'
        },
      },
      id_artist: {
        type: Sequelize.INTEGER,
        references: {
          model: 'artists',
          key: 'id',
          as: 'artist'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('song_artists');
  }
};