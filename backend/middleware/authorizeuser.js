import jsonwebtoken from "jsonwebtoken"
import { farmermodel } from "../models/farmer.js"

export const validjwttoken = (req, res, next) => {
    try {
        var validation = jsonwebtoken.verify(req.cookies.valtoken, process.env.SECRETKEY)
        req.isvalidtoken = true
        req.tokenuser = validation
        next()
    }
    catch (err) {
        console.log(err)
        req.isvalidtoken = false
        next()
    }
}

export const authenticuser = async (req, res, next) => {
    try {
        if (req.isvalidtoken) {
            var user = await farmermodel.findOne({
                phone: req.tokenuser.phone,
                password: req.tokenuser.password
            })
            for (var i = 0; i < user.authtokens.length; i++){
                if(user.authtokens[i] === req.cookies.valtoken){
                    req.isvaliduser = true
                    req.user = user
                    break
                }
                else{
                    req.isvaliduser = false
                }
            }
        }
        else{
            console.log("Invalid user due to token invalidation")
            req.isvaliduser = false
        }
        next()
    }
    catch (err) {
        console.log(err)
        req.isvaliduser = false
        next()
    }
}