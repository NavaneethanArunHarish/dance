var mongoose = require("mongoose");
var schema = mongoose.Schema;

var audit = new schema({
    activity: { type: String, default: '' },
    user: { type: schema.Types.ObjectId, ref: 'user' },
    activity: { type: String, default: '' },
    detail: { type: String, default: '' },
    created_date:{type:Date, default:Date.now},
})
var audit = mongoose.model("audit", audit,'audit');
module.exports = audit;