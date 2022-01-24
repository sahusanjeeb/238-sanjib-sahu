import mongoose from 'mongoose';
import commentSchema from './Comment.js';

// schema for product
const articleSchema = new mongoose.Schema({
    comments: {
        type: [ commentSchema ],
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }    
});

// register the model
// collection - products
mongoose.model( 'Article', productSchema );