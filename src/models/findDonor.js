const mongoose = require('mongoose')
const Schema = mongoose.Schema

const findDonorSchema = new Schema({
    parentName: {
        type: String,
        required: true
    },
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
    Unit: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('findDonor', findDonorSchema)
