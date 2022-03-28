const initialcropnotfound = false
export const setcropnotfound = (state = initialcropnotfound, action) => {
    switch (action.type) {
        case "CROPNOTFOUNDTRUE": return true
        case "CROPNOTFOUNDFALSE": return false
        default: return state
    }
}