const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminDashboardSchema = new Schema({

    totalDonor: {
        type: Number,
        required: true
    },
    totalReceiver: {
        type: Number,
        required: true
    },
    totalBlood: {
        type: Number,
        required: true
    },
    totalHospital: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('adminDashboard', adminDashboardSchema);