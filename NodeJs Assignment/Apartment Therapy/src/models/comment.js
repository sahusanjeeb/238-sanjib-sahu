import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({    
    commenter: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


export default reviewSchema;