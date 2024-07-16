const express=require('express');
const route=express.Router();

const dinkitems=require('../drinks.js');
route.post('/', async (req, res) => {
    try {
      const food_data = req.body;
      const food_saved = new dinkitems(food_data);
      const response = await food_saved.save();
      console.log('Data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  route.get('/', async (req, res) => {
    try {
      const data = await dinkitems.find();
      console.log('Data fetched');
      res.status(200).json(data);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
  
    }
  });
  route.get('/:tastetype',async (req,res)=>{
    try{

        const tastetype=req.params.tastetype;
        if(tastetype=="cold"||tastetype=="hot"||tastetype=="medium"){
            const response=await dinkitems.find({taste:tastetype});
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
  module.exports=route;