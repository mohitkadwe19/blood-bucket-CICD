const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    aadharNumber: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    hospitalName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    appointmentDate: {
        type: Date,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);