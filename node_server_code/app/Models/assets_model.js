var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assetsdetails_schema = new mongoose.Schema({
    asset_name:{ type: String, default: '' },
    asset_type:{ type: String, enum:['HUMAN','STATIC'] },
    category_id:{ type: Schema.Types.ObjectId, ref: 'category'},
    asset_cost:{ type: Number, default: '' },
    business_id:{ type: Schema.Types.ObjectId, ref: 'Business'},
  //  user_asset_id:{ type: Schema.Types.ObjectId, ref: 'User'},
    purchase_cost:{ type: Number, default: '' },
    origin_date:{ type: Date, default: '' },
    expire_date:{ type: Date, default: '' },
    revenue_for_business:{ type: Number, default: '' },
    reccuring_cost:{ type: Number, default: '' },
    created_date:{type:Date, default:Date.now},
    updated_date:{type:Date,default:''}

});

var assetdetails = mongoose.model('asset', assetsdetails_schema,'asset');
module.exports = assetdetails;

