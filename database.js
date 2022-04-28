'use strict';
const mongoose=require('mongoose');
module.exports=()=>{
    mongoose.connect('mongodb+srv://Rahul:myuser@rahul.fack9.mongodb.net/Databaserahul?authSource=admin&replicaSet=atlas-117kuv-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',{
      
    }).then(()=>console.log('connected to database'));
}