#!/usr/bin/env node

const http = require('http');

const traductor = (text, res, level) => {



    // When you have your own Client ID and secret, put down their values here:
    const clientId = process.env.CLIENTID;
    const clientSecret = process.env.CLIENTSECRET;

    // TODO: Specify your translation requirements here:
    const fromLang = "fr";
    const toLang = "en";

    const jsonPayload = JSON.stringify({
        fromLang: fromLang,
        toLang: toLang,
        text: text
    });

    const options = {
        hostname: "api.whatsmate.net",
        port: 80,
        path: "/v1/translation/translate",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-WM-CLIENT-ID": clientId,
            "X-WM-CLIENT-SECRET": clientSecret,
            "Content-Length": Buffer.byteLength(jsonPayload)
        }
    };
    const promise = new Promise((resolve, reject) => {
        const request = new http.ClientRequest(options);
        request.end(jsonPayload);

        request.on('response', function (response) {
            console.log('Status code: ' + response.statusCode);
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                console.log('Translated text:');
                console.log(chunk);
                resolve(chunk)
            });
        })
    })
    Promise.resolve(promise).then(englishWord => {
        const value = {
            french: text,
            english: englishWord,
            level: level
        }
        res.send(value)
    })
}

module.exports = traductor