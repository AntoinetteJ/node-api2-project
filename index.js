const express = require("express");
// const Blog = require("../node-api2-project/data/db")
const server = express();
const posts = require('./data/db.js')
server.use(express.json());

const PORT  = 5000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

server.get('/', (req, res) => {
    res.send('Hello Antoinette')
});


server.post('/api/posts', (req, res) => {
    const newPost = req.body;
    console.log(newPost);
    try {
        if(postInfo.title && postInfo.content){
            shortid = shortid.generate();
            posts.push(postInfo);
            res.status(201).json(postInfo)
        } else {
            res.status(400).json({errorMessage: "Please provide title and content for the post"})
        }
        }
    catch(err){
        res.status(500).json({errorMessage: "There was an error while saving the post to the database"})
    }
 })

server.post('/api/posts/:id/comments', (req, res) => {
    const {id} = req.params;
    const newComment = req.body;
    newComment.id = id;
    console.log(newComment)
    
        let index = posts.findIndex( post => post.id === id);
        if(index !== -1){
            posts[index] = newComment;
            res.status(201).json(posts[index]);
        } else if(newComment.text === ""){
            res.status(400).json({errorMessage: "Please provide text for the comment." })
        }
        if (newComment.comment) {
            posts.push(newComment)
            res.status(201).json({Created})
            console.log(newComment.comment)
        } else{
            res.status(500).json({ error: "There was an error while saving the comment to the database" })
        }
    })
 
server.get('/api/posts', (req, res) => {
    Blog.find(req.query)
    .then(blog => {
        res.status(200).json(blog)  ;
    })
   
})

server.get('/api/posts/:id', (req, res) => {
    Blog.findById(req.query)
    .then(blog =>{
        res.status(200).json(blog)
    })
})

