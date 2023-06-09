const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

//routing endpoint users utama
router.get('/', async (req, res) => {
    const users = await UsersModel.findAll()
    res.status(200).json({
        data: users,
        metadata: "test user endpoint"
    })
})

router.get('/bayar', (req, res) => {
    res.status(200).json({
        data: "masi nunggak",
        metadata: "test user endpoint"
    })
})

router.post('/', async (req, res) => {
    // ini var untuk req, fe ngirim nip, nama, dll ke backend
    // const nip = req.body.nip
    // const nama = req.body.nama
    // const password = req.body.password
    const { nip, nama, password } = req.body

    const encryptedPassword = await bcrypt.hash(password, 10)


    const users = await UsersModel.create({
        nip, nama, password: encryptedPassword
    })
    res.status(200).json({
        data: users, // masuk ke tabel users
        metadata: "test post user endpoint"
    })
})

router.put('/', async (req, res) => {

    const { nip, nama, password, passwordBaru } = req.body


    const userData = await UsersModel.findOne({ where: { nip: nip } })
    // console.log(userData) 

    // password yang muncul di database === password dari inputan. userData kan punya password dalemnya
    if (userData.password === password) {
        const users = await UsersModel.update({
            nama, password: passwordBaru
        }, { where: { nip: nip } })

        res.status(200).json({
            users: {updated: users[0]},
            metadata: "user updated!"
        })
    } else {
        res.status(400).json({
            "error": "data invalid"
        })
    }
})

module.exports = router