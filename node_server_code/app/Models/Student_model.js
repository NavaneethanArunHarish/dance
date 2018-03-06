// var mongoose=require('mongoose');
// var schema = mongoose.Schema;

// var studentdetails_schema = new schema({

//     student_id :{
//         type: mongoose.Schema.Types.ObjectId,
//         index: true,
//         required: true,
//         auto: true,
//       },
//     first_name : {type:String,default:''},
//     last_name : {type:String,default:''},
//     contact_number : {type:String,default:''},
//     email_id : {type:String,default:''},
//     location : {type:String,default:''},
//     date_of_birth : {type:Date,default:''},
//     age : {type:Number,default:''},
//     alloted : {type:Boolean,default:false},
//     payment_id : {type:schema.Types.ObjectId,ref:'payment'},
//     dance_id:{ type: schema.Types.ObjectId, ref: 'dance_category'},
//     batch_id:{ type: schema.Types.ObjectId, ref: 'Batch'},
//     schedule_id:{ type: schema.Types.ObjectId, ref: 'ScheduleSchool'}
// });

// var student_data = mongoose.model('student',studentdetails_schema);
// module.exports = student_data;

