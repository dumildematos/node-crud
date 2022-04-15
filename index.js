
// initial config
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const person = require('./models/Person');

// read Json / midleware 
// define request/response type
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

app.post('/person', (req, res) => {

});

app.get('/', (req, res) => {
    res.json({message: 'Oi express'})
})


const DB_USER = 'root';
const DB_PASS = 'DMyx7zZNl2fQpjNz'

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.q8sep.mongodb.net/bancoapinode1?retryWrites=true&w=majority`)
.then(() => {
    console.log('mongodb connected!');
    app.listen(3000)
})
.catch(error => console.log(error))

