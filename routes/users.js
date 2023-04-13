const express = require('express')
const router = express.Router()

//routing endpoint users utama
router.get('/', (req, res) => {
    res.status(200).json({
        data: "sherlyyyy",
        metadata: "test user endpoint"
    })
})

router.get('/bayar', (req, res) => {
    res.status(200).json({
        data: "masi nunggak",
        metadata: "test user endpoint"
    })
})

module.exports = router