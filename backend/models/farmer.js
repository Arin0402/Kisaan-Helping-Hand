import mongoose from "mongoose";

const farmerSchema = mongoose.Schema({
    farmer_id : {
        type : String,
        // required : true
    },
    username : {
        type : String,
        // required : true
    },
    farmername : {
        type : String,
        // required : true,
        // lowercase : true
    },
    phone : {
        type : Number,
        // required : true,
        min : 1000000000,
        max : 9999999999
    },
    email : {
        type : String,
    },
    password : {
        type : String,
        // required : true
    },
    rating : {
        type : Number,
        max : 5,
        min : 0
    },
    adharcard : {
        type : String,
        maxlength : 12,
        // required : true
    },
    dateofjoin : {
        type : Date,
        default : Date.now
    },
    authtokens : {
        type : Array
    },
    currentotp : {
        type : Number,
        default : -1
    },
    isloggedin : {
        type : Boolean,
        default : false
    },
    images : {
        image_id : {
            type : String,
            // required : true
        },
        image_catagory : {
            type : String,
            default : "user"
        }
    },
    address : {
        city : {
            type : String
        },
        village : {
            type : String,
        }, 
        district : {
            type : String
        }
    }
})

export const farmermodel = mongoose.model('small_farmer', farmerSchema)