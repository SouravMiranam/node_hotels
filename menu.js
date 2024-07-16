const mongoose = require('mongoose');

const menuschema=new mongoose.Schema({
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
        enum:['sweet','spicy','sour']
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
    }

})

const menuitem=mongoose.model('menuitem',menuschema);
module.exports=menuitem