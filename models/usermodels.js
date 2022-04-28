const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({


    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    rollNo: {
        type: String,

    },
    subject: {
        type: String,

    },
    section: {
        type: String,

    },
    age:{
type:Number,
    },
    address: {
        street: String,

        city: String,

        state: String,

    },
      PersonalallInfo: {
          fatherName: String,
         PhoneNumber: Number,
          familyName: String
       },


}, { timestamps: true });

module.exports = mongoose.model('StudentSchema', StudentSchema);