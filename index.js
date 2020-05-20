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
const Project = require("../data/helpers/projectModel.js");
const Action = require ("../data/helpers/actionModel.js");
const express = require("express");

const server = express();

server.use(express.json());

const PORT = 5000;



// server.get('/', (req, res) => {
//     res.send("Hello Antoinette");
// })

server.get("api/projectModel", (req, res) => {
    Project.res(req.query)
  .then(data => {
    res.status(200).send('data');
})
.catch(err => {
    console.log(err)
    res.status(500).json({message: "ERROR"})
})

server.post('/api/projects', (req, res) => {
    res.status(201).json({url: 'api/projects', operation: 'POST'})
})

server.put('/api/projects', (req, res) => {
    res.status(200).json({url: '/api/projects', operation: 'PUT'})
})

server.delete('/api/projects', (req, res) => {
    res.status(204);
})
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})