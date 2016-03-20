const request = require('request');

function getPsnUser (username, callback) {
    const reqOptions = {
        url: `https://io.playstation.com/playstation/psn/profile/public/userData?onlineId=${username}`,
        headers: {
            Origin: 'https://www.playstation.com'
        }
    };

    request(reqOptions, callback);
}

module.exports = {
    get: getPsnUser
};
