export const languageaction = (action) => {
    return {
        type : action
    }
}

export const innerhtmlsetter = (innerhtmldata) => {
    return {
        type : "SETHTML",
        recivedinnerhtml : innerhtmldata
    }
}