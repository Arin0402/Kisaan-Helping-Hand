const initalstate = "english"

export const languagereducer = (state = initalstate, action) => {
    switch (action.type){
        case "ENGLISH" : return "english"
        case "HINDI" : return "hindi"
        case "GARHWALI" : return "garhwali"
        case "KUMAONI" : return "kumaoni"
        default : return state
    }
}

// innerhtmllanguage, innerhtmlcontroller, recivedinnerhtml, innerhtmlsetter, innerhtmldata
const innerhtmllanguage = {}
export const innerhtmlcontroller = (state=innerhtmllanguage, action) => {
    switch (action.type){
        case "SETHTML" : return action.recivedinnerhtml
        default : return state
    }
}