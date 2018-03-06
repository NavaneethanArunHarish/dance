var category_dao = require("../DAO/Category_DAO");

module.exports.create_category = function(create_category,callback){
    category_dao.create_category(create_category,function(created){
        callback(created);
    })
}
module.exports.update_category = function(update_category,callback){
    category_dao.update_category(update_category,function(updated_data){
        callback(updated_data);
    })
}
module.exports.delete_category = function(delete_category,callback){
    category_dao.delete_category(delete_category,function(deleted){
        callback(deleted);
    })
}
module.exports.findbyid_category = function(category_id,callback){
    category_dao.findbyid_category(category_id,function(findone){
        callback(findone);
    })
}
module.exports.getall_category = function(callback){
    category_dao.getall_category(function(getall){
        callback(getall);
    })
}
module.exports.findCategoryByBusinessId = function(create_category,callback){
    category_dao.findCategoryByBusinessId(create_category,function(created){
        callback(created);
    })
}