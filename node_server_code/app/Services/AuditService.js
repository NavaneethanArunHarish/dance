var audit_dao = require("../DAO/AuditDao");

module.exports.create_audit = function(create_audit,callback){
    audit_dao.create_audit(create_audit,function(created){
        callback(created);
    })
}
module.exports.delete_audit = function(delete_audit,callback){
    audit_dao.delete_audit(delete_audit,function(deleted){
        callback(deleted);
    })
}
module.exports.findauditById = function(audit_id,callback){
    audit_dao.findauditById(audit_id,function(findone){
        callback(findone);
    })
}
module.exports.getall_audit = function(callback){
    audit_dao.getall_audit(function(getall){
        callback(getall);
    })
}
