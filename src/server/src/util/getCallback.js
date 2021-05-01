const {createLogger} = require('../logger/index');


const getCallback = (req, res, data, path) => {
    const logger = createLogger(`GET Request on path ${path}`);
    logger.debug('Response', data);
    setTimeout(() => {
        res.send(data);
    }, 2000)
   
}

module.exports = getCallback;