const { Model, DataTypes } = require('sequelize')

//untuk mengerahkan model ke database yg mana
const sequelize = require('../db.config')

class User extends Model { }

User.init({
    nip: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    nama: {
        type: DataTypes.STRING,

    },
    password: {
        type: DataTypes.STRING
    }
}, {
    // ini buat mengarahkan ke database yg mana ya
    sequelize,
    // model name users
    modelNama: 'Users'
})

module.exports = User