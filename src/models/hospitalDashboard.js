const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalDashboardSchema = new Schema({
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
    space: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('hospitalDashboard', hospitalDashboardSchema);