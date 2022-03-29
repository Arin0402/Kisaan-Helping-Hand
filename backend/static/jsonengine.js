import fs from "fs"

export class Jsonengine{
    constructor(data){
        this.filename = "data.json"
        this.data = data
        this.json = null
        this.convert()
    }

    convert(){
        this.json = this.data
    }

    getConvertedData(){
        return this.json
    }

}