var payment_model = require("../Models/Payment_model");

module.exports.create_payment = function (create_payment, callback) {
    var payment = new payment_model(create_payment);
    payment.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(payment);
        }
    })
}
module.exports.delete_payment = function (delete_payment, callback) {
    payment_model.findByIdAndRemove(delete_payment, function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback({ message: "removed" });
        }
    })
}
module.exports.update_payment = function (update_payment, callback) {
    payment_model.findOneAndUpdate({ _id: update_payment._id },
        {
            $set: update_payment
        }, { upsert: true, new: true }, function (err, new_updated) {
            if (err) {
                callback(err);
            }
            else {
                callback(new_updated);
            }

        })
}
module.exports.findbyid_payment = function (findbyid_payment, callback) {
    payment_model.findById(findbyid_payment, function (err, findone_data) {
        if (err) {
            callback(err);
        }
       else {
            callback(findone_data);
        }
    })
}
module.exports.getall_payment = function (callback) {
    payment_model.find(function (err, all_payment) {
        if (err) {
            callback(err);
        }
        else {
            callback(all_payment);
        }
    })
}