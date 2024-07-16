//this file is created because it acts as 
//central module that mangaes the connection bet mongodb database and node js using mongoose
const mongoose=require("mongoose");
//define the mongodb connection url
//this we got from mongodb compass
const mongoURL="mongodb://localhost:27017/hotels";
//replace hotels with ur name and if new name is written then it automatically creates it
//setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,//always u have to include this both parameters to establish connection
    useUnifiedTopology:true
});
//get the default connection pbject
//this object is what you will handle events and interact with the database
//define the event listners for database connection
const db= mongoose.connection;
db.on('connected',()=>{//connected is event listerner
    console.log("connected to mongodb server and database connnection seccessfully");
});
db.on('error',(err)=>{
    console.log("error in connection of mongodb server",err);
});
db.on('disconnected',()=>{
    console.log("disconnected to mongodb server");
});

//export the database connection
module.exports=db;