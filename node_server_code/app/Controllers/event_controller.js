var service = require("../Services/event_service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_event = function (req, res) {
    var eventdetail = req.body;
    service.create_event(eventdetail, function (event) {
        if (event.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: event.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: event
            });
    })
}


module.exports.getall_event = function (req, res) {
    service.getall_event(function (event) {
        if (event.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: event.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: event
            });
    })
}

module.exports.delete_event = function (req, res) {
    var event_detail_id = req.params.id;
    service.delete_event(event_detail_id, function (event_id) {
        if (event_id.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: event_id.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: event_id
            });
    })
}

module.exports.update_event = function (req, res) {
    var event_detail = req.body;
    service.update_event(event_detail, function (event) {
        if (event.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: event.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: event
            });
    })
}

module.exports.find_by_catergory_id = function (req, res) {
    var eventdetail = req.body;
    service.find_by_catergory_id(eventdetail, function (event) {
        res.json(event);
    })
}

module.exports.geteventbydanceid = function (req, res) {
    var event_id = req.params.id;
    service.geteventbydanceid(event_id, function (event_data) {
        if (event_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: event_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: event_data
            });
    })
}

module.exports.findbyhostid_event = function (req, res) {
    var hostId = req.params.hostid;
    service.findbyhostid_event(hostId, function (eventdata) {
        if (eventdata.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: eventdata.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: eventdata
            });
    })
}

module.exports.findbyassetid_event = function (req, res) {
    var assetid = req.params.assetid;
    service.findbyassetid_event(assetid, function (eventdata) {
        if (eventdata.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: eventdata.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: eventdata
            });
    })
}

module.exports.findbybusinessid_event = function (req, res) {
    var businessid = req.params.business_id;
    service.findbybusinessid_event(businessid, function (eventdata) {
        if (eventdata.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: eventdata.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: eventdata
            });
    })
}

module.exports.findById = function (req, res) {
    var sch_detail_id = req.params.id;
    service.findById(sch_detail_id, function (detail_id) {
        if (detail_id.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: detail_id.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: detail_id
            });
    })
}

module.exports.findByIdEventType = function (req, res) {
    var EventType = req.params.id;
    service.findByIdEventType(EventType, function (EventTypeDetail) {
        if (EventTypeDetail.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: EventTypeDetail.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: EventTypeDetail
            });
    })
}

module.exports.findEventsByDate = function (req, res) {
    var date = req.body;
    console.log('--------------------------------', date)
    service.findEventsByDate(date, function (Date) {
        if (Date.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Date.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Date
            });
    })
}

module.exports.findeventBytraineridanddancerid = function (req, res) {
    var event_values = req.body;
    service.findeventBytraineridanddancerid(event_values, function (event_data) {
        if (event_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: event_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: event_data
            });
    })
}

module.exports.findeventByCategoryId = function (req, res) {
    var categoryid = req.body.category_id
    var subCategory_id= req.body.subCategory_id
    service.findeventByCategoryId(categoryid,subCategory_id, function (category) {
        if (category.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: category.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: category
            });
    })
}