var mongoose = require("mongoose");
var schema = mongoose.Schema;

var attendance = new schema({
    attendance_status: { type: String, default: '' },
    date: { type: Date, defafult: '' },
    schedule_id: { type: schema.Types.ObjectId, ref: 'schedule' },
    student_id: { type: schema.Types.ObjectId, ref: 'user' }
})
var attend = mongoose.model("attendance", attendance, 'attendance')
module.exports = attend;    