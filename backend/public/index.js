class Engine {
    constructor() {
        // this.data = this.geData()
        // console.log(this.data)
        // this.getData()
        this.element = document.getElementById("x")
    }

    async getData(url) {
        var response = await fetch(url)
            .then(response => response.json())
            .then(json => json)
        this.renderdata(response)
    }

    createMainElement() {
        return document.createElement('div')
    }

    getHeadingOneTag(data) {
        var heading = document.createElement("h1")
        heading.style.color = "blue"
        heading.appendChild(document.createTextNode(data))
        return heading
    }

    getHeadingTwoTag(data) {
        var heading = document.createElement("h2")
        heading.style.color = "red"
        heading.appendChild(document.createTextNode(data))
        return heading
    }

    getHeadingThreeTag(data) {
        var heading = document.createElement("h3")
        heading.style.color = "yellow"
        heading.appendChild(document.createTextNode(data))
        return heading
    }

    getHeadingFourTag(data) {
        var heading = document.createElement("h4")
        heading.style.color = "green"
        heading.appendChild(document.createTextNode(data))
        return heading
    }

    getHeadingFiveTag(data) {
        var heading = document.createElement("h5")
        heading.style.color = "purple"
        heading.appendChild(document.createTextNode(data))
        return heading
    }

    getHeadingSixTag(data) {
        var heading = document.createElement("h6")
        heading.style.color = "orange"
        heading.appendChild(document.createTextNode(data))
        return heading
    }

    getImageTag(url) {
        var image = document.createElement("img")
        image.src = url
        return image
    }

    getParaTag(data) {
        var para = document.createElement('p')
        para.innerHTML = data
        return para
    }

    renderdata(data) {
        Object.keys(data).forEach(element => {
            var upperelement = this.createMainElement()
            var datablock = data[element]
            Object.keys(datablock).forEach(element => {
                if (element !== "numberoftag") {
                    var ele = datablock[element]['description'].split('$2@')
                    switch (ele[1]) {
                        case 'h1': upperelement.appendChild(this.getHeadingOneTag(ele[0])); break;
                        case 'h2': upperelement.appendChild(this.getHeadingTwoTag(ele[0])); break;
                        case 'h3': upperelement.appendChild(this.getHeadingThreeTag(ele[0])); break;
                        case 'h4': upperelement.appendChild(this.getHeadingFourTag(ele[0])); break;
                        case 'h5': upperelement.appendChild(this.getHeadingFiveTag(ele[0])); break;
                        case 'h6': upperelement.appendChild(this.getHeadingSixTag(ele[0])); break;
                        case 'li': upperelement.appendChild(this.getHeadingSixTag(ele[0]));break;
                        case 'img': upperelement.appendChild(this.getImageTag(ele[0])); break;
                        case 'p': upperelement.appendChild(this.getParaTag(ele[0])); break;
                    }
                }
            })
            this.element.appendChild(upperelement)
        });
    }

}

var e = new Engine()

document.getElementById("getdatabutton").addEventListener("click", async (event) => {
    var resp = await fetch("/crop/getcrop")
        .then(response => response.json())
        .then(json => json)
    // console.log(resp[0])
    console.log(JSON.parse(resp[0].cropdata))
    e.renderdata(JSON.parse(resp[0].cropdata))
})
