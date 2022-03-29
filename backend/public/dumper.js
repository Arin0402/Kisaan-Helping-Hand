
var managmentqueue = []
var jsonfile = {}
jsonfile.disease = []
jsonfile.images = []

var fieldname = [
    "crop_id",
    "cropName",
    "language",
    "description",
    "typeofcrop",
    "seedrate",
    "seedsowingperiod",
    "cropcultivationperiod",
    "climate",
    "temperature",
    "soildescription",
    "soilph",
    "landdescription",
    "irrgation",
    "storage",
]

var arrayfieldname = [
    "districts",
    "variety",
    "seedprocessing",
    "perprationoffield",
    "fertilizer",
    "harvesting",
    "plantprotection",
    "extrainfo"
]

document.querySelector(".submit-button").addEventListener("click", async (event) => {
    for (var j = 0; j < fieldname.length; j++) {
        console.log(fieldname[j])
        var adddata = document.getElementById(fieldname[j]).value
        adddata = adddata.split("\n")
        var temp = ""
        for (var i = 0; i < adddata.length; i++) {
            if (adddata[i] !== "") {
                temp += adddata[i]
            }
        }
        adddata = temp
        jsonfile[fieldname[j]] = adddata
        document.getElementById(fieldname[j]).value = ""
    }
    console.log(jsonfile)
    var resp = await fetch("/crop/addcrop", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonfile)
    }).then(response => response.json()).then(json => json)
    console.log(resp)
})

for (var i = 0; i < arrayfieldname.length; i++) {
    jsonfile[arrayfieldname[i]] = []
    document.getElementById(arrayfieldname[i]).addEventListener("click", (event) => {
        var inputfield = event.target.getAttribute('id') + 'input'
        jsonfile[event.target.getAttribute('id')].push(document.getElementById(inputfield).value)
        document.getElementById(inputfield).value = ""
    })
}

document.getElementById('disease-button').addEventListener('click', (event) => {
    var dises = {}
    dises.name = document.getElementById("disease-name").value
    dises.description = document.getElementById("disease-description").value
    dises.managment = managmentqueue
    managmentqueue = []
    jsonfile.disease.push(dises)
    document.getElementById("disease-name").value = ""
    document.getElementById("disease-description").value = ""
})

document.getElementById('disease-managment-button').addEventListener("click", (event) => {
    var x = document.getElementById('disease-managment').value
    if (x !== "") {
        managmentqueue.push(x)
        document.getElementById('disease-managment').value = ""
    }
})
/*
    select the file
    generate the id for the image
    put the id in the jsonfile.images array
    upload the file in the database

*/

function generateImageId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var imageid = ''
    for (var i = 0; i < 10; i++) {
        var x = characters.charAt(Math.floor(Math.random() * characters.length))
        imageid += x
    }
    return imageid
}

document.getElementById("imageuploader").addEventListener("click", async (event) => {
    var uploadelement = document.getElementById('imageupload')
    if (uploadelement.files.length !== 0) {
        // sending the data to the server and uploading it to the database
        var imgid = generateImageId()
        var imagedata = new FormData()
        imagedata.append("image", uploadelement.files[0])
        var resp = await fetch(`/image/addimage/crop/${imgid}`, {
            method: "post",
            body: imagedata
        })
        // push the imageId in the jsonfile
        jsonfile.images.push(imgid)
    }
    else{
        alert("Please select the file!")
    }
})

document.getElementById("bannerbutton").addEventListener("click", async (event) => {
    var uploadelement = document.getElementById('imageupload')
    if (uploadelement.files.length !== 0) {
        // sending the data to the server and uploading it to the database
        event.target.disabled = true
        var imgid = generateImageId()
        var imagedata = new FormData()
        imagedata.append("image", uploadelement.files[0])
        var resp = await fetch(`/image/addimage/crop/${imgid}`, {
            method: "post",
            body: imagedata
        })
        // push the imageId in the jsonfile
        jsonfile.banner_image = imgid
        alert("setted bannerimage")
    }
    else{
        alert("Please select the file!")
    }
})
