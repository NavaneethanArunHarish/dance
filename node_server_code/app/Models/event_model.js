var mongoose = require('mongoose');
var user = require('./user_model')
var Schema = mongoose.Schema;


var eventdata = new Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    location: { type: String, default: '' },
    event_type: { type: String, default: '' },
    status: { type: String, default: '' },
    event_date: { type: Date, default: '' },
    assetid: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],
    host: { type: Schema.Types.ObjectId, ref: 'User' },
    category_id: { type: Schema.Types.ObjectId, ref: 'category' },
    business_id:{ type: Schema.Types.ObjectId, ref: 'business' },
    subCategory_id:{type:Schema.Types.ObjectId,ref:'subCategory'},
    created_date:{type:Date, default:Date.now},
    updated_date:{type:Date,default:''}

});

var event = mongoose.model('event', eventdata,'event');
module.exports = event;
