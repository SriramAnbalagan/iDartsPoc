'use strict';

const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

function reqSerializer(req) {
    return {
        method: req.method,
        url: req.url,
        headers: req.headers
    };
}

const loggerOptions = (json = false) =>  {
    return {
        serializers: {
            req: reqSerializer
        },
        stream: (json) ? process.stdout : prettyStdOut,
        level: 'trace'
    };
};

module.exports = {
    createLogger: (name) => {
        const logger = {
            level: 'trace',
            json: false
        };
        const {json} = logger;

        return bunyan.createLogger({
            ...loggerOptions(json),
            ...logger,
            name
        });
    }
};