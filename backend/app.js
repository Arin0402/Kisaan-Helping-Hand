import express from "express";
import cors from "cors"
import dotenv from 'dotenv'
import bodyparser from "body-parser"
import path from "path";
import "./db/connection.js"
dotenv.config()
// models
import { innerhtmlmodel } from "./models/innerhtmlmodel.js";
// routers
import { croprouter } from "./routers/cropsroutes.js";
import { farmerrouter } from "./routers/farmer.js";
import { imagerouter } from "./routers/imagerouter.js"
import { blogrouter } from "./routers/blogrouter.js";
import { husbandaryrouter } from "./routers/husbandary.js";


const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use(express.static("public"))
app.use("/crop", croprouter)
app.use("/farmer", farmerrouter)
app.use('/image', imagerouter)
app.use('/blog', blogrouter)
app.use("/husbandry", husbandaryrouter)


/*

    store the json in the database
    when language is changed then request the specified language format
    the format will have attributes which will decide the innerHTML

*/

app.post("/insertdata", bodyparser.json(), async (req, res) => {
    /* 
        req.body = {language : "", fieldname : [], values : []}
        retrive the file from the database on bases of language
        parse it to the json
        edit the json and add the field to it
        stringify the json
        then save it the database
    */
    var inhtml = await innerhtmlmodel.findOne({ innerhtmllanguage: req.body.language })
    if (inhtml !== null) {
        var inhtmldata = JSON.parse(inhtml.innerhtmldata)
        for (let i = 0; i < req.body.fieldname.length; i++) {
            inhtmldata[req.body.fieldname[i]] = req.body.value[i]
        }
        inhtml.innerhtmldata = JSON.stringify(inhtmldata)
        var resp = await inhtml.save()
        res.send(resp)
    }
    else{
        var resp = innerhtmlmodel()
        resp.innerhtmllanguage = req.body.language
        var innerhtmldata = {}
        for(var i =0; i < req.body.fieldname.length; i++){
            innerhtmldata[req.body.fieldname[i]] = req.body.value[i]
        }
        resp.innerhtmldata = JSON.stringify(innerhtmldata)
        var resp = await resp.save()
        res.send(resp)
    }
})

app.post("/getinnerhtmldata", bodyparser.json(), async (req, res) => {
    console.log(req.body)
    var resp = await innerhtmlmodel.findOne({ innerhtmllanguage: req.body.language })
    res.json(resp)
})

app.get("/getdummyjson", (req, res) => {
    res.sendFile(path.resolve(path.resolve(), "./public/505error.html"))
})

app.post("/dumpdata", bodyparser.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.post("/convertintojson", bodyparser.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body)
    res.json(new Jsonengine(req.body).getConvertedData())
})

app.listen(process.env.PORT, "192.168.250.14", (err) => {
    console.log(`service started at ${process.env.PORT}`)
    if (err) {
        throw err
    }
})
// var resp = await innerhtmlmodel({
//     innerhtmllanguage: "English",
//     innerhtmldata: JSON.stringify({
//         home: "Home",
//         agriculture: "Ariculture",
//         animalhusbandary: "Animal Husbandary",
//         organic: "Organic",
//         governmentschemes: "Government Schemes",
//         expert: "Expert QnA",
//         partnerwithus: "Partner with Us",
//         blog: "Blog",
//         mainquote: "Empowering Rural Uttrakand, Digitally",
//         search: "search",
//         cropdescription: "Description",
//         typeofrop: "Crop Type",
//         seedsowingperiod: "Seed Sowing period",
//         cropcultivationperiod: "Crop Cultivation period",
//         climate: "Climate Require for crop",
//         districts: "Discricts",
//         seedrate: "Seed Rate",
//         variety: "Variety Of Crop",
//         temprature: "Temprature Required For Croping",
//         soildescription: "Description of the Required Soil",
//         soilph: "Soil ph",
//         seedprocessing: "Seed Processing",
//         landdescription: "Land Description",
//         soilrequired: "Description of the Reqiured Soil",
//         perprationoffield: "Prepration of Field",
//         fertilizer: "Fertilizer",
//         irrigation: "Irrigation",
//         plantprotection: "How to Protect the crop ?",
//         storage: "Where to Store harvested crop",
//         harvesting: "Harvesting Techniques",
//         extrainfo: "Facts must be carefully Noticed",
//         selecty
//         kisancreditcard : "Kissan Credit card"
//     })
// }).save()

/*
    home: "Home",
            agriculture: "Ariculture",
            animalhusbandary: "Animal Husbandary",
            organic: "Organic",
            governmentschemes: "Government Schemes",
            blog: "Blog",
            mainquote: "Empowering Rural Uttrakand, Digitally",
            search: "search",
            cropdescription: "Description",
            typeofrop: "Crop Type",
            seedsowingperiod: "Seed Sowing period",
            cropcultivationperiod: "Crop Cultivation period",
            climate: "Climate Require for crop",
            districts: "Discricts",
            seedrate: "Seed Rate",
            variety: "Variety Of Crop",
            temprature: "Temprature Required For Croping",
            soildescription: "Description of the Required Soil",
            soilph: "Soil ph",
            seedprocessing: "Seed Processing",
            landdescription: "Land Description",
            soilrequired: "Description of the Reqiured Soil",
            perprationoffield: "Prepration of Field",
            fertilizer: "Fertilizer",
            irrigation: "Irrigation",
            plantprotection: "How to Protect the crop ?",
            storage: "Where to Store harvested crop",
            harvesting: "Harvesting Techniques",
            extrainfo: "Facts must be carefully Noticed"
            kisancreditcard : "Kissan Credit Card"
            selectyourdistrict : "Select Your district",
            searchcropbyname : "Search crop by name"
            login : "Login",
            register : "Register",
            fertilizercalculator : "Fertilizer Calculator",
            selectcropname : "Selecr Crop Name",
            fieldarea : "Enter area in acers",
            amountofseed : Amount of seed require per acer
            nitrogen : "Nitrogen required per acre",
            Phosphorous : Phosphorous required per acre,
            potash : Potash required per acre,
            urea : urea required per acre,
            employment : Employment,
            entername : Enter Name,
            enterpassword : Enter Password,
            confirmpassword : Confirm Password,
            enteradhar : Enter Aadhar number,
            enteraddress : Enter Address,
            uploadimg: "Upload Image",
            entermobile : "Enter Mobile Number"
        )}
*/