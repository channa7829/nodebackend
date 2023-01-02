//create the server
const express =require('express');
const app =express();
const db = require('./connection');
const postModel = require('./postModel');
const cors = require("cors");
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));


//CRUD
//post request
app.post('/add',async(req,res)=>{
    const{titel,content} = req.body;
    try{
        const newPost = await postModel.create({titel,content});
        res.json(newPost);
    }catch(error){
        res.status(500).send(error);
    }
});

//get request
app.get('/getall',async(req,res)=>{
    try{
        const posts = await postModel.find();
        res.json(posts);
    }catch(error){
        res.status(500).send(error);
    }
   
});

//get byid
app.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const posts = await postModel.findById(id);
        res.json(posts);
    }catch(error){
        res.status(500).send(error);
    }
   
});

//put
app.put('/:id',async(req,res)=>{
    const {id} = req.params;
    const {titel,content}=req.body;
    try{
        const posts = await postModel.findByIdAndUpdate(id,{titel,content});
        res.json(posts);
    }catch(error){
        res.status(500).send(error);
    }
   
});

//delete
app.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    
    try{
        const posts = await postModel.findById(id);
        await posts.remove();
        res.json("deleted successfully");
    }catch(error){
        res.status(500).send(error);
    }
   
});



//listen the port where our app need to listen
app.listen(3001,()=>{
    console.log("Listening to 3001..");
});
