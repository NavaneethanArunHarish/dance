var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Enum = require('enum');
const Type = require('../constants/userRoles.js')


var batchdetails_schema = new mongoose.Schema({
    batch_name:{type:String, default: ''},
    description:{type:String, default: ''},
    schedule_id:{ type: Schema.Types.ObjectId, ref: 'schedule'},
    level:{type:String, enum:['EASY','MEDIUM','HARD']},
    type:{type:String, enum:['SUMMER','WEEKDAY','WEEKEND','FEMALE','KIDS'] },
    created_date:{type:Date, default:Date.now},
    updated_date:{type:Date,default:''}
    
});

var batchdetails = mongoose.model('batch', batchdetails_schema,'batch');
module.exports = batchdetails;

