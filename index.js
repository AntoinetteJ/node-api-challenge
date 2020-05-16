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
const Project = require("../node-api-challenge/data/helpers/projectModel");
const Action = require ("../node-api-challenge/data/helpers/actionModel");
const express = require("express");

const server = express();

server.use(express.json());

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

server.get('/', (req, res) => {
    res.send("Hello Antoinette");
})

server.get("projects", (req, res) => {
    // const id = req.params.id
    Project.get(req.query)
    .then(data => {
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        }
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            error: "The information could not be retrieved."
        })
    })
})

server.get("/projects/name", (req, res) => {
    Project.get(req.query)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "Error"})
    })
})

server.post("")
