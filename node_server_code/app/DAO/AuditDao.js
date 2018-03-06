var auditdetails = require('../Models/AuditModel')
var user = require('../Models/user_model')
var schedule = require('../Models/schedule_model')

module.exports.create_audit = function (audit_detail, callback) {
  var audit = new auditdetails(audit_detail);
  console.log(audit_detail)
  audit.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(audit);
    }
  });
};

module.exports.getall_audit = function (callback) {
  auditdetails.find(function (err, audit_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(audit_detail);
    }
  });
};


module.exports.delete_audit = function (audit_detail_id, callback) {
  auditdetails.findByIdAndRemove(audit_detail_id, function (err, audit_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", audit_detail_id: audit_detail_id });
    }
  });
};


module.exports.findauditById = function (auditid, callback) {
  auditdetails.findauditById({ _id: auditid }, function (err, auditdata) {
    if (err) {
      callback(err);
    }
    else {
      callback(auditdata);
    }
  });
};
