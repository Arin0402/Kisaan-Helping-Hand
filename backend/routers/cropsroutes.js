import express from "express"
import bodyparser from "body-parser"
import path from "path"
import { cropmodel } from "../models/crop.js"

export const croprouter = express.Router()

croprouter.post("/addcrop", bodyparser.json(), async (req, res) => {
    var crop = cropmodel({
        crop_id : req.body.crop_id,
        cropName : req.body.cropName,
        language : req.body.language,
        description  : req.body.description,
        typeofcrop  : req.body.typeofcrop,
        seedrate  : req.body.seedrate,
        seedsowingperiod  : req.body.seedsowingperiod,
        cropcultivationperiod : req.body.cropcultivationperiod,
        climate : req.body.climate,
        temperature : req.body.temperature,
        soildescription : req.body.soildescription,
        soilph : req.body.soilph,
        landdescription : req.body.landdescription,
        irrgation : req.body.irrgation,
        storage : req.body.storage,
        districts : req.body.district,
        variety : req.body.variety,
        seedprocessing : req.body.seedprocessing,
        perprationoffield : req.body.perprationoffield,
        fertilizer : req.body.fertilizer,
        harvesting : req.body.harvesting,
        plantprotection : req.body.plantprotection, 
        extrainfo : req.body.extrainfo,
        disease : req.body.disease,
        banner_image : req.body.banner_image,
        districts : req.body.districts
    })
    crop = crop.save((err) => {
        if (err) {
            console.log(err)
        }
    })
    res.json("saved the crop")
})

croprouter.post("/filtercropid", bodyparser.json(), async (req, res) => {
    try{
        var resp = await cropmodel.findOne({language : req.body.language, crop_id : req.body.crop_id})
        res.json(resp)
    }
    catch(err){
        console.log(err)
        res.json("error")
    }
})

croprouter.post("/filter", async (req, res) => {
    try {
        var filtercritaria = {}
        if (req.body.district !== "") {
            filtercritaria.districts = {$all : [req.body.district]}
        }
        if (req.body.crop !== "") {
            filtercritaria.cropName = req.body.crop
        }
        filtercritaria.language = req.body.language
        var filteredcrops = await cropmodel.find(filtercritaria)
        res.send(filteredcrops)
    }
    catch(err){
        console.log(err)
        res.status(505).sendFile(path.join(path.resolve(),"public/505erroe.html"))
    }
})