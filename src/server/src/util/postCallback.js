const {createLogger} = require('../logger/index');

const postCallback = (req, res, data, path) => {
    const logger = createLogger(`POST Request on path ${path}`);
    logger.debug('Request', req.body);
     setTimeout(() => {
    res.send(data);
    }, 2000);
};

module.exports = postCallback;
