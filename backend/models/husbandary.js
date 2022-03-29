import mongoose from "mongoose";

const husbandaryschema = mongoose.Schema({
    husbandary_name: {
        type: String
    },
    language: {
        type: String
    },
    husbandary_id: {
        type: String
    },
    generalinfo: {
        type: String
    },
    fodder: [
        {
            fodder_name : {
                type : String
            },
            fodder_description : {
                type : String
            }
        }
    ],
    care_of_breed: {
        type: Array
    },
    disease: [{
        disease_name: {
            type: String
        },
        disease_description: {
            type: String
        },
        diesease_treatment : {
            type : String
        }
    }],
    husbandary_image: {
        type: String
    }
})

export const husbandarymodel = mongoose.model("husbandary", husbandaryschema)