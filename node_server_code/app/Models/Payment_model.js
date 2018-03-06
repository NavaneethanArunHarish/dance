var mongoose = require("mongoose");
var schema = mongoose.Schema;

var payment_details = new schema({
   payment_type:{type:String,enum:['CREDIT_CARD','DEBIT_CARD','e-WALLET','CASH']},
   amount : {type:Number,default:''},
   schedule_id:{ type: schema.Types.ObjectId, ref: 'schedule'},
   payment_status:{type:String,enum:['PAID','UNPAID']},
   student_id:{ type: schema.Types.ObjectId, ref: 'user'},
   created_date:{type:Date, default:Date.now},
   updated_date:{type:Date,default:''}
})

var payment = mongoose.model("payment",payment_details,'payment');
module.exports = payment;