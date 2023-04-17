const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

//routing endpoint users utama
router.get('/', async(req, res) => {
    const users = await UsersModel.findAll()
    res.status(200).json({
        data: users,
        metadata: "test user endpoint"
    })
})

router.post('/', async(req, res) => {
    // ini var untuk req, fe ngirim nip, nama, dll ke backend
    // const nip = req.body.nip
    // const nama = req.body.nama
    // const password = req.body.password
    const {nip, nama, password} = req.body

    const users = await UsersModel.create({
        nip, nama, password
    })
    res.status(200).json({
        data: users, // masuk ke tabel users
        metadata: "test post user endpoint"
    })
})

router.get('/bayar', (req, res) => {
    res.status(200).json({
        data: "masi nunggak",
        metadata: "test user endpoint"
    })
})

module.exports = router