const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('git-user-db', 'root', 'pass', {
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite',
})

module.exports = sequelize;