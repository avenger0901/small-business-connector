const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    type:{
        type:String
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
    contact:{
        type:String
    },
    social:{
        email:{
            type: String
        },
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