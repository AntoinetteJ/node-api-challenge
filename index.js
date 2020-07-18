/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
const Projects = require('./data/helpers/projectModel.js');
const Action = require('./data/helpers/actionModel.js');
const express = require("express");

const server = express();


// server.use('/', (req, res) => {
// res.status(200).send('Hello Antoinette')
// })

const PORT = 5000;

server.get("/api/projects", (req, res) => {
    
    res.status(200).json({url: "/api/projects", operation: "GET"})
})
server.get("/api/actions", (req, res) =>{

    res.status(200).json({url: "/api/actions", opertaion: "GET"})
})

server.get("/api/projects/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    res.status(200).json({url: `/projects/${id}`, operation: `Project ID is ${id}`})
})
server.post("/api/projects", (req, res) => {
    res.status(201).json({url: 'api/projects', operation: 'POST'})
});

server.post("/api/actions", (req, res) => {
    res.status(200).json({url: "/api/actions", operation: "POST"})
})

server.put("/api/projects", (req, res) => {
    res.status(200).json({url: '/api/projects', operation: 'PUT'})
});

server.put("api/actions", (req, res) => {
    res.status(200).json({url: "/api/actions", operation: "PUT"})
})

server.delete("/api/projects", (req, res) => {
    res.status(200).json({url: "/api/projects", operation: "DELETE"});
});

server.delete("/api/actions", (req, res) => {
    res.status(200).json({url: "/api/actions", operation: "DELETE"})
})
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});

