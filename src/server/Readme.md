
## Simulator API

This repo contains the api service used for creating a simulator api for any UI.

The contents of the repo are:
```
|_ src               // Basic logic to create a server
|_ index.js          // Script to export this api
```

To use this API import createServer from this API and provide the config as a parameter to it in following format:

{
    name: 'Simulator name',
    port: port number,
    routes: [
        {
            path: '/path/to/use',
            data: source to json data,
            handler: 'GET' or 'POST'
        },
        {
            path: '/path/to/use',
            data: source to json data,
            handler: 'GET' or 'POST'
        }
        .
        .
        .
        .,
        {
            path: '/path/to/use',
            data: source to json data,
            handler: 'GET' or 'POST'
        }
    ]
}


