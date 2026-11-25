const express = require("express");
const router = express.Router();
const {Post} = require("../models");

router.get("/", async (req,res)=>{
    const listofposts=await Post.findAll();
    res.send(listofposts);
});

router.get('/byId/:id', async (req,res)=>{
    const id=req.params.id;
   const post = await Post.findByPk(id);
   res.json(post);
});

router.post("/", async (req,res)=>{
 const post = req.body;
 await Post.create(post); 
 res.send(post);
});


module.exports = router;