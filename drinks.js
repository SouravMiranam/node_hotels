const mongoose = require('mongoose');

const drinksschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:44,
    },
    taste:{
        type:String,
        enum:['cold','hot','medium']
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingridents:{
        type:[Array],
        required:true,
        default:[],
    },
    num_sale:{
        type:Number,
        required:true,
        default:0,
    },
    is_hot:{
        type:String,
        required:true,
        default:false,
    }

})

const drinkitems=mongoose.model('drinkitems',drinksschema);
module.exports=drinkitems