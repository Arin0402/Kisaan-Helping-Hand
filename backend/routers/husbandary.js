import { husbandarymodel } from "../models/husbandary.js"
import express from "express"
import bodyParser from "body-parser"

export const husbandaryrouter = express.Router()

husbandaryrouter.get("/s",(req, res) => {
    console.log("hello")
    res.send("husbandary")
})

husbandaryrouter.post("/gethusbandry", bodyParser.json(), async (req, res) => {
    try{
    var resp = await husbandarymodel.find({language : req.body.language})
    res.json(resp)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

husbandaryrouter.post("/addhusbandry", bodyParser.json(), async (req, res) => {
    try{
        var resp = await husbandarymodel({
            husbandary_name : req.body.husbandary_name,
            husbandry_id : req.body.husbandry_id,
            generalinfo : req.body.generalinfo,
            fodder : req.body.fodder,
            language : req.body.language,
            care_of_breed : req.body.care_of_breed,
            disease_treatment : req.body.disease_treatment,
            husbandary_image : req.body.husbandary_image
        }).save()
        res.send(resp)
    }
    catch(err){
        console.log(err)
        res.json("error")
    }
})