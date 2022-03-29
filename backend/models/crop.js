import mongoose from "mongoose";

const cropschema = mongoose.Schema({
    cropName : {
        type : String,
        required : true
    },
    // cropdata : {
    //     type : String,
    //     required : true
    // },
    language : {
        type : String,
        require : true
    },
    districts : {
        type : Array,
        required : true
    },
    description : {
        type : String
    },
    typeofcrop : {
        type : String
    },
    seedrate : {
        type : String
    },
    seedsowingperiod : {
        type : String
    },
    cropcultivationperiod : {
        type : String
    },
    variety : {
        type : Array
    },
    climate : {
        type : String
    },
    temperature : {
        type : String
    },
    soildescription : {
        type : String
    },
    soilph : {
        type : String
    },
    seedprocessing : {
        type : Array
    },
    landdescription : {
        type : String
    },
    perprationoffield : {
        type : Array
    },
    fertilizer : {
        type : Array
    },
    irrigation : {
        type : String
    },
    disease : [
        {
            name : {
                type : String,
            },
            description : {
                type : String
            },
            managment : {
                type : Array
            }
        }
    ],
    harvesting : {
        type : Array
    },
    plantprotection : {
        type : Array
    },
    storage : {
        type : String
    },
    extrainfo : {
        type : Array
    },
    // contain the ids of the images in the crop
    images : {
        type : Array
    },
    // contain the id of the banner image of the crop
    banner_image : {
        type : String,
        required : true
    },
    crop_id : {
        type : Number
    },
    nitrogen_per_hacter : {
        type : Number
    },
    urea_per_hacter : {
        type : Number
    },
    potash_per_hacter : {
        type : Number
    },
    phosphrus_per_hacter : {
        type : Number
    },
    amountofcrop : {
        type : Number
    }
})

export const cropmodel = mongoose.model('Crop', cropschema)