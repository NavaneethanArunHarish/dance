var mongoose = require("mongoose");
var schema = mongoose.Schema;

var category = new schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: Number, default: '' },
    business_id: { type: schema.Types.ObjectId, ref: 'Business' },
    created_date:{type:Date, default:Date.now},
    updated_date:{type:Date,default:''}
})
var cat = mongoose.model("category", category,'category');
module.exports = cat;