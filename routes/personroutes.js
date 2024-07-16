const express=require('express');
const route=express.Router();
const person = require('../person.js');//this is used for schema
route.post('/', async (req, res) => {
    try {
      const data = req.body;
      const savedPerson = new person(data);
      const response = await savedPerson.save();
      console.log('Data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  route.get('/', async (req, res) => {
    try {
      const data = await person.find();
      console.log('Data fetched');
      res.status(200).json(data);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
  
    }
  });

//filter outs the required data and give data
  route.get('/:workType',async (req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=="chef"||workType=="manager"||workType=="waiter"||workType=="coder"){
        const response=await person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:"invalid work type"});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
  
    }
    
  });
  
//update operation--> we use put opeartion
route.put('/:id',async (req,res)=>{
    try{
        const person_id=req.params.id;
        const updatedpersondata=req.body;
        const response=await person.findByIdAndUpdate(person_id,updatedpersondata,{
            new:true,//sends the updataed data as responce after updation
            runValidators:true,//checks all the required fields in updated data as per schema 
        })
        if(!response){//if it return nothing as response
            res.status(404).json({error:"person not found"});

        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error" });

    }
});
route.delete('/:id',async (req,res)=>{
    try{
        const person_id=req.params.id;
        const response=await person.findByIdAndDelete(person_id);
        if(!response){//if it return nothing as response
            res.status(404).json({error:"person not found"});
        }
        console.log('data deleted');
        res.status(200).json({message:"person data delelted successfully"});
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error" });

    }
});

  module.exports=route;