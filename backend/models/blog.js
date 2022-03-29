import mongoose from "mongoose";

const blogschema = mongoose.Schema({
    submissiondate : {
        type : Date,
        default : Date.now
    },
    blog_id : {
        type : Number,
        required : true
    },
    blog_data : {
        type : String,
        required : true
    },
    blog_owner_id : {
        type : String,
        required : true
    },
    blog_topic : {
        type : String,
        required : true
    },
    blog_owner_name : {
        type : String,
        required : true
    },
    blog_owner_image : {
        type :   String 
    },
    blog_banner_image : {
        type : String
    },
    blog_views : { 
        type : Number,
        default : 0
    },
    blog_like : {
        type : Number,
        default : 0
    },
    blog_comment : [
        {
            comment_id : {
                type : String,
                required : true
            },
            comment_date : {
                type : Date,
                default : Date.now
            },
            comment_owner_id : {
                type : String,
                required : true
            }
        }
    ]
})

export const blogmodel = mongoose.model("blog", blogschema)