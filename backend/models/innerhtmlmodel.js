import mongoose from "mongoose";

var innerhtmlschema = mongoose.Schema({
    innerhtmllanguage : {
        type : String,
        required : true
    },
    innerhtmldata : {
        type : String,
        required : true
    } 
})

export const innerhtmlmodel = mongoose.model("innerhtmls", innerhtmlschema)