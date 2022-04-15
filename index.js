require('dotenv').config();
// initial config
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// read Json / midleware 
// define request/response type
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

const personRoutes = require('./routes/person.routes')
app.use('/person', personRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Oi express'})
})


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.q8sep.mongodb.net/bancoapinode1?retryWrites=true&w=majority`)
.then(() => {
    console.log('mongodb connected!');
    app.listen(3000)
})
.catch(error => console.log(error))

