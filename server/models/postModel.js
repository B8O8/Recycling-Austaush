const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    postOwner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    img: {
        type: String,
        default: "",
        require: [true, "Please put your items photo"]
    },

    content: {
        type: String,
        default: "",
        required: true,
        minlength: 5,
        maxlength: 500,
        trim: true
    },

    phonenumber: {
        type: Number,
        require: [true, "Please enter Your number"],
        minlength: 8,
        maxlength: 13
    },

    location:{
        type: String,
        require: [true, "Please enter your loction"]
    },

    
},{timestamps: true});

module.exports = mongoose.model("Post", postSchema);