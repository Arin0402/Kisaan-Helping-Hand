import bodyParser from "body-parser";
import cookieparser from "cookie-parser"
import express from "express"
import { blogmodel } from "../models/blog.js"

export const blogrouter = express.Router()

function blogidgenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var imageid = ''
    for (var i = 0; i < 10; i++) {
        var x = characters.charAt(Math.floor(Math.random() * characters.length))
        imageid += x
    }
    return imageid
}

blogrouter.post("/addblog", bodyParser.json(), cookieparser(), (req, res) => {
    console.log(req.cookies)
    try {
        var blog = blogmodel({
            blog_id: blogidgenerator(),
            blog_data: req.body.blog_data,
            blog_topic: req.body.blog_topic,
            blog_owner_name: req.user.username,
            blog_owner_image: req.user.images.image_id
        })
        if (req.body.blog_banner_image !== null) {
            blog.blog_banner_image = req.body.blog_banner_image
        }
        blog.save()
        res.json("Blog added successfully")
    }
    catch (err) {
        console.log(err)
        res.json("Unable to upload the Blog!")
    }
})

blogrouter.get("/getblog/:pageid", async (req, res) => {
    var initalval = 1 + (req.params.pageid - 1) * 10
    var blogs = await blogmodel.find({
        $and: [
            { blog_id: { $gte: initalval } },
            { blog_id: { $lte: initalval + 10 } }
        ]
    })
    res.json(blogs)
})
