var wrapper = require('../../app/constants/wrapper')
var subCategory_service = require('../Services/subCategory_service')



module.exports.create_subCategory = function (req , res){
    var create_subCategory = req.body;
    subCategory_service.create_subCategory(create_subCategory, function(data){
        console.log(data)
        if(data.errors){
            res.status(400).send({
              status:wrapper.FailureStatus,
              code:wrapper.FailureCode,
              result:data.message

            });
        
        } else{
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result:data
            });
        }
    })

}
module.exports.update_subCategory = function (req, res) {
    var update_subCategory = req.body;
    subCategory_service.update_subCategory(update_subCategory, function (updated_data) {

        if (updated_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: updated_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: updated_data
            });
    })
}

module.exports.getall_subCategory = function (req, res) {
    subCategory_service.getall_subCategory(function (findall_data) {
        if (findall_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: findall_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: findall_data
            });
    })
}
