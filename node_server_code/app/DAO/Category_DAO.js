var category_model = require("../Models/Category_model");
var buisness_model= require("../Models/business_model")

module.exports.create_category = function (create_category, callback) {
    var category = new category_model(create_category);
    category.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(category);
        }
    })
}
module.exports.delete_category = function (delete_category, callback) {
    category_model.findByIdAndRemove(delete_category, function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback({ message: "removed" });
        }
    })
}
module.exports.update_category = function (update_category, callback) {
    category_model.findOneAndUpdate({ _id: update_category._id },
        {
            $set: update_category
        }, { upsert: true, new: true }, function (err, new_updated) {
            if (err) {
                callback(err);
            }
            else {
                callback(new_updated);
            }

        })
}
module.exports.findbyid_category = function (findbyid_category, callback) {
    category_model.findById(findbyid_category, function (err, findbyid_data) {
        if (err) {
            callback(err);
        }
        else {
            callback(findbyid_data);
        }
    })
}
module.exports.getall_category = function (callback) {
    category_model.find().populate([
        {path:'business_id',model:buisness_model}
    ]).exec(function (err, all_category) {
        if (err) {
            callback(err);
        }
        else {
            callback(all_category);
        }
    })
}

module.exports.findCategoryByBusinessId = function (find_category_by_businessId, callback) {
    category_model.find({ business_id: find_category_by_businessId.business_id }, function (err, findbyid_data) {
        if (err) {
            callback(err);
        }
        else {
            callback(findbyid_data);
        }
    })
}