// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
var posts = [];
var id = 1;
const server = express();
// to enable parsing of json bodies for post requests
// server.use(express.json());
server.use(express.json())
// TODO: your code to handle requests
server.post("/posts", (req, res)=>{
    const post = req.body;
    if(!post.title || !post.author || !post.contents) {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
        
    }else if(post.title && post.author && post.contents){
        post.id = id;
        id++;
        posts.push(post)
        
        res.json(post)
    }

})
server.post("/posts/author/:author", (req, res)=>{
    const post = req.body;
    if(!post.title) res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
    else if(!post.contents) res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
    else{
        if(req.params.author){
            post.id = id;
            id++
            post.author = req.params.author
            posts.push(post)
            console.log(posts)
            res.json(post)
        }
}})

server.get("/posts", (req, res)=>{
    if(req.query.term) return res.json(posts.filter(post => post.title.includes(req.query.term) || post.contents.includes(req.query.term)))
    else return res.json(posts) 
})
server.get("/posts/:author",(req,res)=>{
    let resultado = posts.filter(post => post.author == req.params.author)
    if(resultado.length<1) return  res.status(STATUS_USER_ERROR).json({error: "No existe ningun post del autor indicado"});
    if(resultado) return res.json(resultado)
})
server.get("/posts/:author/:title",(req,res)=>{
    let resultado = posts.filter(post => post.author == req.params.author && post.title == req.params.title)
    if(resultado.length<1) return  res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"});
    if(resultado) return res.json(resultado)
})

server.put("/posts",(req,res)=>{
    const post = req.body;
    if(!post.title || !post.id || !post.contents) {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"})
    }
    let resultado = posts.find( x => x.id == post.id);
    if (!resultado) return res.status(STATUS_USER_ERROR).json({error: "El id no corresponde con un Post existente"})
    resultado.title = post.title;
    resultado.contents = post.contents;

    return res.json(resultado)
})

server.delete("/posts", (req,res)=>{
    const post = req.body;
    if(!post.id) return res.status(STATUS_USER_ERROR).json({
        error: "No se recibieron los parámetros necesarios para eliminar un Post"
      })

    let resultado = posts.find((x) => x.id === post.id)

    if(!resultado) return res.status(STATUS_USER_ERROR).json({error: "El id no corresponde con un Post existente"})
    
    posts = posts.filter((x) => x.id !== post.id)
    
    return res.send({success :true}
    )
})

 server.delete("/author", (req,res)=>{
    const post = req.body;
    let autor = posts.find(x => x.author == post.author)
    if(!autor) return res.status(STATUS_USER_ERROR).json({error: "No existe el autor indicado"})

    let resultado = posts.filter(x => x.author == post.author);
    posts.filter( x => x.author !== post.author);
    return res.json(resultado)

})






module.exports = { posts, server };
