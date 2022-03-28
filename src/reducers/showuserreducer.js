const intialshowuser = false
export const setshowuser = (state=intialshowuser, action )=> {
    switch (action.type){
        case "SETTOTRUE" : return false
        default : return state
    }
}