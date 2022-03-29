import bodyParser from "body-parser"
import express from "express"
import multer from "multer"
import path from "path"
import fs from 'fs'
import { imagemodel } from "../models/images.js"

export const imagerouter = express.Router()
const upload = multer({ dest: "../public/uploads/" })

imagerouter.post('/addimage/:catagory/:imageid', bodyParser.urlencoded({ extended: true }), upload.single("image"), async (req, res) => {
    if (req.file !== undefined) {
        var imagepath = fs.readFileSync(path.resolve(path.join(path.resolve(), `../public/uploads/${req.file.filename}`)))
        var imgresp = await imagemodel({
            image_id: req.params.imageid,
            image_catagory: req.params.catagory,
            image: {
                content_type: "image/png",
                data: Buffer.from(imagepath)
            }
        }).save(err => {
            if (err) {
                console.log(err)
            }
        })
        res.json("uploaded the file")
    }
    else{
        res.json("Specify the file")
    }
})

imagerouter.get('/getimage/:catagory/:imageid', async (req, res) => {
    var img = await imagemodel.findOne({
        image_id: req.params.imageid,
        image_catagory: req.params.catagory,
    })
    res.setHeader('Content-Type', 'image/png')
    res.send(img.image.data)
})