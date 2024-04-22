const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json());

app.use('/user', routes);

app.get('/', (req, res) => {
    res.status(200).json('ok')
});

// Global middleware that will block any error which is not handled in middlewares.js
app.use((err, req, res, next) => {
    console.error(err); 
    res.status(500).send('Internal Server Error'); 
});

app.listen(port, () => {
    console.log('Connected successfully!')
});
