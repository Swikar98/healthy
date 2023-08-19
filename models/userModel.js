const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,

        },
        password: {
            types: String,
            required: true,
        },
    },
        {
       timestamps: true,
        }
    );
const userModel = mongoose.models('users', userSchema);
module.exports = userModel;