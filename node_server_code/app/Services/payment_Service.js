var payment_dao = require("../DAO/payment_DAO");

module.exports.create_payment = function(create_payment,callback){
    payment_dao.create_payment(create_payment,function(created){
        callback(created);
    })
}
module.exports.update_payment = function(update_payment,callback){
    payment_dao.update_payment(update_payment,function(updated_data){
        callback(updated_data);
    })
}
module.exports.delete_payment = function(delete_payment,callback){
    payment_dao.delete_payment(delete_payment,function(deleted){
        callback(deleted);
    })
}
module.exports.findbyid_payment = function(payment_id,callback){
    payment_dao.findbyid_payment(payment_id,function(findone){
        callback(findone);
    })
}
module.exports.getall_payment = function(callback){
    payment_dao.getall_payment(function(getall){
        callback(getall);
    })
}