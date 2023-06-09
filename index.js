const express = require('express')
const cors = require('cors')
const port = 3000

const sequelize = require('./db.config')

// setiap perubahan model yg terjadi database akan menintegrasi sesuai arahan kodingan kita
// kalo database ready berarti sedang sync orm dengan express js
sequelize.sync().then(() => console.log('database ready!'))

const userEndpoint = require('./routes/users')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userEndpoint)

app.listen(port, () => console.log(`running server on port ${port}`))

console.log('running server on port', port)