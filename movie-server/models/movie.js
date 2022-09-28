const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
      },
    releasedate: {
         type: Date, 
         default: Date.now 
    },
    rating: {
        type: Number
      
    },
    price: {
        type: Number
    },
    description:{type: String},
    isDelete:{
        type: Boolean,
        default: false
    }
    
});

module.exports = mongoose.model('Movie', movieSchema);