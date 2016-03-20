'use strict';

const request = require('request');
const config = require('../config');

function getGame(game, req, callback) {
    const reqOptions = {
        url: `${config.giantBomb.host}/api/search/?api_key=${config.giantBomb.key}&format=json&query="${game}"&resources=game`,
        headers: {
            Origin: config.giantBomb.host,
            'User-Agent': req.headers['user-agent']
        }
    };

    request(reqOptions, callback);
}

module.exports = {
    get: getGame
};
