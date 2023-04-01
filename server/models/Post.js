const mongoose = require('mongoose');

const postMediaSchema = new mongoose.Schema({
    url: {
        type: String,
        trim: true,
    },
}, {
    _id: false,
});

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    caption: {
        type: String,
        required: true
    },
});