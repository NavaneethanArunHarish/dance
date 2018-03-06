var mongoose = require('mongoose');
var AssetSchool = require('./assets_model')
var userSchool = require('./user_model')
var Schema = mongoose.Schema;

var schedule_schema = new mongoose.Schema({
    location: { type: String, default: '' },
    schedule_date: Date,
    eventid: { type: Schema.Types.ObjectId, ref: "Event" },
    category_id: { type: Schema.Types.ObjectId, ref: 'category' },
    subCategory_id: { type: Schema.Types.ObjectId, ref: 'subCategory' },
    starttime: { type: String, default: '' },
    endtime: { type: String, default: '' },
    host: { type: Schema.Types.ObjectId, ref: 'User' },
    filled_slot: { type: String, default: '' },
    available_slot: { type: Number, default: '' },
    schedule_rate: { type: Number, default: '' },
    target_revenue: { type: String, default: '' },
    total_revenue: { type: String, default: '' },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: '' }
});

var scheduledetails = mongoose.model('schedule', schedule_schema, 'schedule');
module.exports = scheduledetails;

