'use strict';

const express   = require('express');
const psn       = require('playstation-trophies');
const psnUser   = require('./psn/user');
const path      = require('path');
const app       = express();
const parser    = require('body-parser');
const port      = process.env.port || 3030;

app.use(parser.json());
// Serve up distribution files and index.html
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'views')));

// Routes
app.post('/publicTrophies', (req, res) => {
    psn.Trophies.request(req.body.PSNID, (err, games) => {
        if (err) {
            return console.log(err);
        }
        res.send(games);
    });
});

app.post('/publicID', (req, res) => {
    psnUser.get(req.body.PSNID, (err, req, userData) => {
        if (err) {

        }

        res.send(userData);
    });
})

// Listen on port
app.listen(port, () => {
    console.log('server listening on ', port);
});
