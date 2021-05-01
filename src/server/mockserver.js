const createServer = require('./src/createServer');

const config = {
    name: 'iDarts | Server',
    port: 8005,
    routes: [
        {
            path: '/api/getmarketdata',
            data: require('./data/json/marketData.json'),
            handler: 'GET'
        }
    ]
};
createServer(config);