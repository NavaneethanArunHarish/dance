var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessdetails_schema = new mongoose.Schema({
    name: { type: String, default: '' },
    building: { type: String, default: '' },
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    country: { type: String, default: '' },
    pincode: { type: Number, default: '' },
    business_status: { type: Boolean, default: 'false' },
   // location: { type: Geolocation, default: '' },
    phone: { type: Number, default: '' },
    logo: { type: Buffer, default: '' },
    openhours: { type: String, default: '' },
    landline: { type: Number, default: '' },
    facebook: { type: String, default: '' },
    google: { type: String, default: '' },
    twitter: { type: String, default: '' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    created_date:{type:Date, default:Date.now},
    updated_date:{type:Date,default:''}
});

var businessdetails = mongoose.model('business', businessdetails_schema,'business');
module.exports = businessdetails;

