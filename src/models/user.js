const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    bloodGroup: {
        type: String,

    },
    phone: {
        type: String,

    },
    address: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    pinCode: {
        type: String,

    },
    country: {
        type: String,

    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)
export default User