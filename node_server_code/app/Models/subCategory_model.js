var mongoose = require("mongoose");
var schema = mongoose.Schema;

var subCategory = new schema({
    
    //sub_category:{type:String,enum:['BEGINNER','INTERMEDIATE','ADVANCED']},
    sub_category_level :{type:String},
    created_date:{type:Date, default:Date.now},
    
})
var sub = mongoose.model("subCategory", subCategory,'subCategory');
module.exports = sub;