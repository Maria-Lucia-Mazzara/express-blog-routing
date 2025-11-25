const express = require('express')
const app = express()
const array = require('../dati/posts_array')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

