const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizeCampSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    Organization: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('OrganizeCamp', OrganizeCampSchema);
