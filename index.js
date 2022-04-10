
// initial config
const express = require('express');
const app = express();

// read Json using midleware
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Oi express'})
})


app.listen(3000)
