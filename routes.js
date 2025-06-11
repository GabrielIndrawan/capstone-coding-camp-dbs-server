const {predict, getAllPredictions} = require("./handler");

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
    },
    {
        method: "GET",
        path: '/prediction',
        handler: getAllPredictions
    }
]

module.exports = routes;