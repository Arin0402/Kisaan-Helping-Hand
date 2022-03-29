import mongoose from "mongoose"

const largerfarmerschema = mongoose.Schema({
    farmername : {
        type : String,
        required : true,
        lowercase : true
    },
    phone_number : {
        type : Number,
        required : true,
        min : 1000000000,
        max : 9999999999
    },
    email_id : {
        type : String,
    },
    password : {
        type : String,
        required : true
    },
    land_description : {
        type : String
    },
    land_area : {
        type : Number
    },
    address : {
        type : String,
        required : true
    },
    land_location : {
        type : String,
        required : true
    },
    works : [
        {
            work_id : {
                type : String,
                required : true
            },
            work : {
                type : String,
                required : true
            },
            work_fees : {
                type : Number,
                required : true
            },
            publishingdate : {
                type : Date,
                required : true,
                default : Date.now
            },
            dateofstarting : {
                type : Date,
                required : true,
            },
            dateofending : {
                type : Date,
                required : true
            },
            numberofworkerreq : {
                type : Number,
                required : true
            },
            hasdone : {
                type : Boolean,
                default : false
            }
        }
    ]
})

export const largerfarmermodel = mongoose.model("largefarmer", largerfarmerschema)