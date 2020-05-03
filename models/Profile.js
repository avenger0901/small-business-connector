const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company:{
        type:String
    },
    about:{
        type:String
    },
    website:{
        type:String,
    },
    location:{
        type:String
    },
    status:{
        type:String,
        required:true
    },
    delivery:{
        type:String
    },
    takeout:{
        type:String
    },
    contact:{
        type:String
    },
    social:{
        twitter:{
            type:String
        },
        facebook:{
            type:String
        },
        instagram:{
            type:String
        }
    },
    date: {
        type:Date,
        default:Date.now
    }


});

module.exports = Profile = mongoose.model('profile',ProfileSchema);