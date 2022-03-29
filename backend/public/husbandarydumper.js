
var fields = [
    "husbandary_name",
    "language",
    "generalinfo",
]

var arrayfields = [
    "fodder",
    "care_of_breed",
    "disease"
]

var jsonfile = {}
jsonfile["husbandary_image"] = ""
jsonfile["fodder"] = []
jsonfile["care_of_breed"] = []
jsonfile["disease"] = []

function generateImageId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var imageid = ''
    for (var i = 0; i < 10; i++) {
        var x = characters.charAt(Math.floor(Math.random() * characters.length))
        imageid += x
    }
    return imageid
}

jsonfile['husbandary_id'] = generateImageId()

document.getElementById('upload-button').addEventListener('click', async (event) => {
    var imageid = generateImageId()
    var imagefile = document.getElementById('husbandary_image').files[0]
    var image = new FormData()
    image.append('image', imagefile)
    var resp = await fetch(`http://192.168.106.14:4000/image/addimage/husbandry/${imageid}`, {
        method : "post",
        body : image
    })
    .then(response => response.json())
    .then(json => json)
    if(resp === "uploaded the file"){
        jsonfile["husbandary_image"] = imageid
        alert("uploaded")
    }
    else{
        alert("not uploaded")
    }
})


document.getElementById('submit-button').addEventListener('click', (event) => {
    for(var i = 0; i < fields.length; i++){
        console.log(fields[i])
        jsonfile[fields[i]] = document.getElementById(fields[i]).value
        document.getElementById(fields[i]).value = ""
    }
    var resp = fetch("http://192.168.106.14:4000/husbandry/addhusbandry", {
        method : 'post',
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(jsonfile)
    })

})

document.getElementById('fodderbutton').addEventListener('click', (event) => {
    var tempobj = {}
    if (document.getElementById("fodder_name").value !== ""){
        tempobj["fodder_name"] = document.getElementById("fodder_name").value
    }
    if (document.getElementById("fodder_description").value !== ""){
        tempobj["fodder_description"] = document.getElementById("fodder_description").value
    }
    document.getElementById("fodder_name").value = ""
    document.getElementById("fodder_description").value = ""
    jsonfile['fodder'].push(tempobj)
})

document.getElementById('care_of_breedbutton').addEventListener('click', (event) => {
    jsonfile['care_of_breed'].push(document.getElementById('care_of_breed').value)
    document.getElementById('care_of_breed').value = ""
})

document.getElementById('disease_button').addEventListener('click', (event) => {
    var tempobj = {}
    if(document.getElementById('disease_name').value !== ""){
        tempobj["disease_name"] = document.getElementById("disease_name").value
    }
    if (document.getElementById("disease_description").value !== ""){
        tempobj["disease_description"] = document.getElementById("disease_name").value
    }
    if (document.getElementById("disease_treatment").value !== ""){
        tempobj["disease_treatment"] = document.getElementById("disease_treatment").value
    }
    document.getElementById('disease_name').value = ""
    document.getElementById('disease_description').value = ""
    document.getElementById('disease_treatment').value = ""
    jsonfile['disease'].push(tempobj)
})