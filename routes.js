const predict = require("./handler");

const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Server is running...";
        }
    },
    {
        method: "POST",
        path: '/prediction',
        handler: predict
    }
]

module.exports = routes;