const {createLogger} = require('../logger/index');


const fileCallback = (req, res, data, path) => {
    const logger = createLogger(`POST Request on path ${path}`);
    logger.debug('File', req);
    res.send(data);
}

module.exports = fileCallback;