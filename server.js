const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init(){
    const server = Hapi.server({
        host: "0.0.0.0",
        port: process.env.PORT || 3000
    })

    server.route(routes);

    await server.start();
    console.log("Server is running on : ",server.info.uri);
}

init();