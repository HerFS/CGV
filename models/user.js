const { STRING } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      movie: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      movie_day: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      movie_time: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      movie_seat: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      movie_price: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      money: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
// 영화 제목, 시간, 날짜, 좌석, 가격(잔액)