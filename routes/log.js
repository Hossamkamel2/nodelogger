const {logs}=require("../models/log");
const express = require("express");
const router = express.Router();
const _ = require("lodash");


router.post('/',async (req,res)=>{
    try{
 let log=_.pick(req.body,["name","main","weather"]);
const savedCollection=new logs(log);

await savedCollection.save();

res.send(_.pick(savedCollection,["_id","weather[0]['description']"]));
    }
    catch{
        res.status(500).send("error");
    }

})

module.exports=router;