var dao = require("../DAO/user_Dao")


module.exports.update_user = function(detail,callback) {

   dao.update_user(detail,function (sch_detail){

     callback(sch_detail);

   });

}

module.exports.getuserbydanceid = function(categoryId,subCategoryId,callback){
  dao.getuserbydanceid(categoryId,subCategoryId,function(user_data){
    callback(user_data);
  })
}



module.exports.delete_user = function(sch_detail_id,callback) {

   dao.delete_user(sch_detail_id,function (sch_detail_id){

     callback(sch_detail_id);

   });

}

module.exports.getall_user = function(callback) {
  
     dao.getall_user(function (sch_detail){
  
       callback(sch_detail);
  
     });
  
 }
  
   
   module.exports.changeUserPrivilage = function(UserData,callback) {
  
     dao.changeUserPrivilage(UserData,function (User){
  
       callback(User);
  
     });
  
 }