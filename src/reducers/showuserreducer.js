const intialshowuser = false
export const setshowuser = (state=intialshowuser, action )=> {
    switch (action.type){
        case "SETTOTRUE" : return true
        case "SETTOFALSE" : return false
        default : return state
    }
}