var mongoose = require('mongoose');
var userSchool = require('./user_model')
var Schema = mongoose.Schema;

var scheduledetails_schema = new mongoose.Schema({
    hosts: { type: Schema.Types.ObjectId, ref: 'User' },
    schedule_id: { type: Schema.Types.ObjectId, ref: 'schedule' },
    category_id:{ type: Schema.Types.ObjectId, ref: 'category'},
    subCategory_id:{type:Schema.Types.ObjectId,ref:'subCategory'},
    event_id: { type: Schema.Types.ObjectId, ref: "event" },
    paid_status:{type:String, enum: ['PAID', 'UNPAID']},
    status:{type:String, enum: ['REQUESTED', 'CONFIRMED', 'CANCELLED'], default: null },
    created_date:{type:Date, default:Date.now},
    updated_date:{type:Date,default:''}
});

var scheduledetails = mongoose.model('schedule_detail', scheduledetails_schema,'schedule_detail');
module.exports = scheduledetails;