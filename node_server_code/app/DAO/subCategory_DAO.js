var subCategory_model = require("../Models/subCategory_model")

module.exports.create_subCategory = function (create_sub, callback) {
    var sub = new subCategory_model(create_sub);
    sub.save(function (err) {
        if (err) {
            callback(err)
        }
        else {
            callback(sub)
        }

    })

}

module.exports.update_subCategory = function (update_subCategory, callback) {
    console.log('update category',update_subCategory)
    subCategory_model.findOneAndUpdate({ _id: update_subCategory._id},
        {
            $set: update_subCategory
        }, { upsert: true, new: true }, function (err, new_updated) {
            if (err) {
                callback(err);
            }
            else {
                callback(new_updated);
            }

        })
}
module.exports.getall_subCategory = function (callback) {
    subCategory_model.find(function (err, all_attendance) {
        if (err) {
            callback(err);
        }
        else {
            console.log('alldata', all_attendance)
            callback(all_attendance);
        }
    })
}


