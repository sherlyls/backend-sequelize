// untuk generate model, untuk create ke database
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class User extends Model { }

User.init({
    nip: {
        type: DataTypes.INTEGER,
        unique: true
        
    },
    nama: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    // ini buat mengarahkan ke database yg mana ya
    sequelize,
    // model name users
    modelName: 'Users'
})

module.exports = User