express = require('express');
const getCallback = require('./util/getCallback');
const fileCallback = require('./util/fileCallback');
const postCallback = require('./util/postCallback');
const {createLogger} = require('./logger/index');
const bodyParser = require('body-parser');

const initServer = () => {
    app = express();
	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type, SADS_CORP_FLAG");
        next();
      });
    return app;
}
const createServer = (config) => {
    const {port, routes, name} = config;
    const logger = createLogger(name);
    const app = initServer();
    routes.forEach((routeDetails) => {
        const {path, data, handler, requstBody} = routeDetails;
        switch (handler){
            case 'GET':
                return app.get(path, (req, res, next) => getCallback(req, res, data, path));
            case 'FILE':
                return app.post(path, (req, res, next) => fileCallback(req, res, data, path));
			case 'POST':
				return app.post(path, (requstBody, res, next) => postCallback(requstBody, res, data, path));
            // Todo add support for more handlers
        } 

    });
    app.listen(port, ()=>{logger.debug(`${name} listening on port ${port}`)});
}

module.exports = createServer;