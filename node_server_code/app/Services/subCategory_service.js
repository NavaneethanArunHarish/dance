var subCategory_DAO = require("../DAO/subCategory_DAO");

module.exports.create_subCategory = function (create_subCategory,callback){
    subCategory_DAO.create_subCategory(create_subCategory, function(created){
        callback(created);
    })
}

module.exports.update_subCategory = function(update_subCategory,callback){
    subCategory_DAO.update_subCategory(update_subCategory,function(updated_data){
        callback(updated_data);
    })
}
module.exports.getall_subCategory = function(callback){
    subCategory_DAO.getall_subCategory(function(getall){
        callback(getall);
    })
}