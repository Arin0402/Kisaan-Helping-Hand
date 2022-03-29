import mongoose from "mongoose"

const imageschema = mongoose.Schema({
    image_id : {
        type : String
    },
    image_catagory : {
        type : String
    },
    image : {
        content_type : {
            type : String,
            required : true
        },
        data : {
            type : Buffer,
            required : true
        }
    }
})

export const imagemodel = mongoose.model('Image', imageschema)