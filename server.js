const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init(){
    const server = Hapi.server({
        host: "localhost",
        port: 5000
    })

    server.route(routes);

    await server.start();
    console.log("Server is running on : ",server.info.uri);
}

init();