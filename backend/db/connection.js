import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"

dotenv.config({path : path.join(path.resolve(),"/config.env")})

export const connection = mongoose.connect(process.env.DATABASEURL).then(() => {
    console.log('connected succcessfully with database...')
})
.catch((err) => {
    console.log(err)
})