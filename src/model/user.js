const {Schema, model} =  require('mongoose')

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },

    email: {
        type: String,
        required: true,
        unique: true,

    },
    age: {
        type: Number,
        default: null,
    },
    isUser:{
        type: Boolean,
        default: True,

    },
    isAdmin: {
        type: Boolean,
        default: true,
    },

}, {timestamps: true}
);

const userModel = model('users', userSchema);

module.exports = userModel;