const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class GitUser extends Model {}

GitUser.init({
    username: {
        type: DataTypes.STRING,
    },
    lastseen: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'gituser',
    timestamps: false
})

module.exports = GitUser
