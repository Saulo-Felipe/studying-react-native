const { Sequelize } = require("sequelize");


const sequelize = new Sequelize('xaxseizz', 'xaxseizz', '8PlxWhgJirLB9TvA0KNdRw5vteD2Sddk', {
  host: 'ruby.db.elephantsql.com',
  dialect: 'postgres'
});


module.exports = sequelize;