import express, { response } from "express"
import bodyparser from "body-parser"
import { farmermodel } from "../models/farmer.js"
import jsonwebtoken from "jsonwebtoken"
import { authenticuser, validjwttoken } from "../middleware/authorizeuser.js"
import cookieParser from "cookie-parser"
import twilio from "twilio";
import path from "path"

export const farmerrouter = express.Router()


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

function generateotp() {
    var h = Math.floor(Math.random() * 1000000)
    return h
}

farmerrouter.post('/login', bodyparser.json(), cookieParser(), async (req, res) => {
    console.log("login request")
    try {
        var farmer = await farmermodel.findOne({
            phone : req.body.phone,
            password : req.body.password
        })
        if (farmer !== null) {
            var otp = generateotp()
            var resp = await client.messages
                .create({
                    body: `${otp}`,
                    from: '+15673201074',
                    to: `+91${farmer.phone}`
                })
                var token = jsonwebtoken.sign(req.body, process.env.SECRETKEY)
            farmer.currentotp = otp
            farmer.authtokens.push(token)
            farmer = await farmer.save()
            res.cookie("valtoken", token, { expires: new Date(Date.now() + 1800000000) })
            res.json({isvalid : true})
            // res.send("<script>document.cookie = 'username=aryan'</script>")
        }
        else {
            res.json({isvalid : false})
            // res.send("<script>document.cookie = 'username=aryan'</script>")
        }
    }
    catch (err) {
        console.log(err)
        res.status(505).sendFile(path.resolve(path.resolve() + "./public/505error.html"))
    }
})

// farmerrouter.post("/login", bodyparser.json(), cookieParser(), async (req, res) => {
//     try {
//         console.log("sdfghkjlkfdsdfhfhkjlkhgfdsdfhgjhk")
//         var resp = await farmermodel.find({
//             phone: req.body.phone,
//             password: req.body.password
//         })
//         // console.log(resp)
//         if (resp.length !== 0) {
//             res.cookie("asd", "asdfgh")
//             res.header({
//                 "Access-Control-Allow-Headers": "*",
//                 "Access-Control-Allow-Methods": "*",
//                 "Access-Control-Allow-Origin": "*"
//             })
//             res.send(resp)
//         }
//         else {
//             res.cookie("asd", "asdfgh")
//             res.json({ "h": "v" })
//         }
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

farmerrouter.post("/namecheck", bodyparser.json(), async (req, res) => {
    try {
        var resp = await farmermodel.find({ username: req.body.name })
        if (resp.length === 0) {
            res.json('can take the name')
        }
        else {
            res.json("cannot take the name")
        }
    }
    catch (err) {
        console.log(err)
        res.status(505).sendFile(path.resolve(path.resolve() + "./public/505error.html"))
    }
})

farmerrouter.post("/register", bodyparser.json(), async (req, res) => {
    console.log("hello")
    console.log(req.body)
    var farmer = await farmermodel({
        username: req.body.username,
        farmer_id: req.body.farmerid,
        farmername: req.body.farmername,
        phone: req.body.phone,
        district: req.body.district,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        adharcard: req.body.adharcard,
        images: {
            image_id: req.body.image_id,
            image_catagory: req.body.image_category
        }
    }).save()
    res.send("Send data")
})

farmerrouter.post("/otpauth", bodyparser.json(), cookieParser(), validjwttoken, authenticuser, async (req, res) => {
    console.log("request for otp")
    try {
        if (req.isvaliduser) {
            if (req.body.otp === req.user.currentotp) {
                req.user.currentotp = -1
                req.user.isloggedin = true
                req.user = await req.user.save()
                res.json(req.user)
            }
            else if (req.user.currentotp === -1) {
                console.log("sdfjds")
                res.json(req.user)
            }
            else {
                console.log("notcorrect otp")
                res.json("Incorrect Otp")
            }
        }
        else {
            console.log("this is invalid otp")
            res.json("Incorrect otp")
        }
    }
    catch (err) {
        console.log(err)
        res.status(505).sendFile(path.resolve(path.resolve() + "./public/505error.html"))
    }
})

farmerrouter.get("/resendopt", bodyparser.json(), cookieParser(), validjwttoken, authenticuser, async (req, res) => {
    try {
        if (req.isvaliduser) {
            var newotp = generateotp()
            req.user.currentotp = newotp
            req.user.save()

            var resp = await client.messages
                .create({
                    body: `${newotp}`,
                    from: '+15673201074',
                    to: `+91${req.user.phone}`
                })
            res.json("otp resended")
        }
        else {
            res.json("invalid user")
        }
    }
    catch (err) {
        console.log(err)
        req.status(505).sendFile(path.resolve(path.resolve(), "./public/505error.html"))
    }
})

// generate the otp for the forgotpassword
farmerrouter.post("/forgotpasswordotp", bodyparser.json(), async (req, res) => {
    try {
        var user = await farmermodel.findOne({ phone: req.body.phonenumber })
        if (user !== null) {
            var newotp = generateotp()
            user.currentotp = newotp
            var user = await user.save()
            var resp = await client.messages
                .create({
                    body: `${newotp}`,
                    from: '+15673201074',
                    to: `+91${req.body.phonenumber}`
                })
            res.cookie("phonenumber", req.body.phonenumber)
            res.send("Otp sended")
        }
        else {
            res.json("invalid phone number")
        }
    }
    catch (err) {
        console.log(err)
        res.status(505).sendFile(path.resolve(path.resolve(), "./public/505error.html"))
    }
})

// change the password
farmerrouter.post("/changepassword", bodyparser.json(), cookieParser(), async (req, res) => {
    // req.body = {phonenumber, otp, password}
    try {
        var user = await farmermodel.findOne({ phone: req.cookies.phonenumber })
        console.log(user)
        if (user.currentotp === req.body.otp) {
            // edit the current otp and password of the user
            user.currentotp = -1
            user.password = req.body.password
            user = await user.save()
            res.clearCookie("phonenumber")
            res.json(user)
        }
        else {
            // send the message of incorrect otp
            res.json("incorrect otp")
        }
    }
    catch (err) {
        console.log(err)
        req.json("Internal server error")
    }
})

// change the loggedin field to false
farmerrouter.post("/logout", bodyparser.json(), cookieParser(), validjwttoken, authenticuser, async (req, res) => {
    try {
        if (req.isvaliduser) {
            req.user.isloggedin = false
            for (var i = 0; i < req.user.authtokens.length; i++) {
                if (req.user.authtokens[i] === req.cookies.valtoken) {
                    req.user.authtokens.splice(i, 1)
                    break
                }
            }
            req.user = await req.user.save()
            res.json(req.user)
        }
        else {
            res.json("Invalid user")
        }
    }
    catch (err) {
        console.log(err)
        res.status(505).sendFile(path.resolve(path.resolve() + "./public/505error.html"))
    }
})

farmerrouter.get("/allfarmer", bodyparser.json(), async (req, res) => {
    try {
        var resp = await farmermodel.find()
        res.json(resp)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
})