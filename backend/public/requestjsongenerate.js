class Jsongenerate{
    constructor(){
        this.mainelement = document.getElementById('form')
        this.tagjson = {}
        this.numofblock = 0
        this.addinglistner()
    }

    generateBlock(){
        this.numofblock += 1
        var temp = this.numofblock
        this.tagjson[`block${this.numofblock}`] = {}
        this.tagjson[`block${this.numofblock}`]['numberoftag'] = 1
        var blockdiv = document.createElement('div')
        blockdiv.id = `block${this.numofblock}`
        var inh = document.createElement('p')
        inh.innerHTML = "block"
        blockdiv.appendChild(inh)
        this.generateTag(blockdiv, temp)
        var newtagbutton = document.createElement('button')
        newtagbutton.id = `taggenerator${temp}`
        newtagbutton.type = "button"
        newtagbutton.innerHTML = "Generate New Tag"
        newtagbutton.addEventListener('click', () => {
            this.tagjson[`block${temp}`]['numberoftag'] += 1
            this.generateTag(blockdiv, temp)
            document.getElementById(`taggenerator${temp}`).disabled = true
        })
        blockdiv.appendChild(newtagbutton)
        this.mainelement.appendChild(blockdiv)
    }

    generateImageId(){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var imageid = ''
        for(var i = 0; i < 10; i++){
            var x = characters.charAt(Math.floor(Math.random()*characters.length))
            imageid += x
        }
        return imageid
    }

    generateImageUrl(image_id){
        var url = `http://127.0.0.1:4000/images/crop/${image_id}`
        return url
    }

    updateJsonImg(url, block, tagnumber){
        this.tagjson[`block${block}`][`tag${tagnumber}`] = {}
        this.tagjson[`block${block}`][`tag${tagnumber}`]['description'] = url+"$2@img"
        document.getElementById(`taggenerator${block}`).disabled = false
    }

    async uploadimage(imageid, block, tagnumber){
        var image = new FormData()
        var fileinpele = document.getElementById(`block__select${block}-${tagnumber}-fileinp`)
        image.append('imageid', imageid)
        image.append('imagecatagory', "crop")
        image.append('image', fileinpele.files[0])
        var imgresp = fetch(`http://192.168.210.14:4000/image/addimage/crop/${imageid}`, {
            method : 'post',
            // headers : {
            //     'Content-Type' : "multipart/form-data"
            // },
            body : image
        })
        .then()
        console.log(fileinpele)
        console.log(fileinpele.files[0])
    }

    generateTag(parentelement, blocknum){``
        // creating the main div
        var maindiv = document.createElement('div')
        // creating the select
        var block = document.createElement('select')
        block.id = `block__select${blocknum}-${this.tagjson[`block${blocknum}`]['numberoftag']}`
        block.name = "tagname"
        var arr = ["h1","h2", "h3", "h4", "h5", "h6", "img", "p", "li", "a", "span"]
        // creating the options
        for(var i = 0; i < arr.length; i++){
            var opt = document.createElement('option')
            opt.value = arr[i]
            opt.innerHTML = arr[i]
            block.appendChild(opt)
        }
        block.addEventListener('change', (event) => {
            if(event.target.value === 'img') {
                document.getElementById(`${event.target.id}-fileinp`).disabled = false
            }
            else{
                document.getElementById(`${event.target.id}-fileinp`).disabled = true
            }
        })
        maindiv.appendChild(block)
        // creating the lable
        var labl = document.createElement('label')
        labl.innerHTML = "description"
        maindiv.appendChild(labl)
        // creating the file input tag
        var fileinp = document.createElement('input')
        fileinp.type = "file"
        fileinp.id = `block__select${blocknum}-${this.tagjson[`block${blocknum}`]['numberoftag']}-fileinp`
        fileinp.disabled = true
        maindiv.appendChild(fileinp)
        // create a upload image button
        var uploadimg = document.createElement('button')
        uploadimg.innerHTML = 'Upload image'
        uploadimg.block = blocknum
        uploadimg.type = "button"
        uploadimg.tagnumber = this.tagjson[`block${blocknum}`]['numberoftag']
        uploadimg.id = `block__uploadimg${blocknum}-${this.tagjson[`block${blocknum}`]['numberoftag']}`
        uploadimg.addEventListener('click', (event) => {
            var image_id = this.generateImageId()
            var image_url = this.generateImageUrl(image_id)
            this.updateJsonImg(image_url, event.target.block, event.target.tagnumber)
            this.uploadimage(image_id, event.target.block, event.target.tagnumber)
        })
        maindiv.appendChild(uploadimg)
        // creating the textarea
        var ta = document.createElement('textarea')
        ta.id = `block__textarea${blocknum}-${this.tagjson[`block${blocknum}`]['numberoftag']}`
        ta.name = "description"
        maindiv.appendChild(ta)
        // creating the add json button
        var addbutton = document.createElement('button')
        addbutton.type = "button"
        addbutton.block = blocknum
        addbutton.tagnumber = this.tagjson[`block${blocknum}`]['numberoftag']
        addbutton.innerHTML = "add to json"
        addbutton.addEventListener('click', (event) => {
            var blockobject = this.tagjson[`block${event.target.block}`]
            var numoftag = event.target.tagnumber
            var selectbox = `block__select${event.target.block}-${numoftag}`
            blockobject[`tag${numoftag}`] = {}
            blockobject[`tag${numoftag}`]['description'] = document.getElementById(`block__textarea${event.target.block}-${numoftag}`).value + "$2@" + document.getElementById(selectbox).value
            document.getElementById(`taggenerator${event.target.block}`).disabled = false
        })
        parentelement.appendChild(addbutton)
        parentelement.appendChild(maindiv)
    }

    addinglistner(){
        document.getElementById('generatenewblockbutton').addEventListener('click', () => {
            this.generateBlock()
        })
    }

    getTagJson(){
        return this.tagjson
    }

}

var jsongene = new Jsongenerate()
var subbutton = document.getElementById('submit-button')

subbutton.addEventListener('click', async () => {
    var cropinfo = {}
    cropinfo.cropName = document.getElementById('cropname').value
    cropinfo.cropdata = jsongene.getTagJson()
    cropinfo.language = document.getElementById('language').value
    var resp = await fetch('/crop/addcrop', {
        'method' : 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        "body" : JSON.stringify(cropinfo)
    })
    .then(response => response.json())
    .then(json => new Engine().renderdata(json))
})