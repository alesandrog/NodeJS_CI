const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.status(200).send('Welcome to port 3000!');
});
api.get('/home', (req, res) => {
    res.status(200).send("Response from home");
});
api.get('/test', (req, res) => {
    res.status(200).send('Response from test');
});
module.exports = api;