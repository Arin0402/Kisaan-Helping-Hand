const initialloginuser = null
export const loginuserreducer = (state=initialloginuser, action) => {
    switch(action.type) {
        case "SETLOGINUSER" : return action.user
        case "SETLOGOUTUSER" : return null
        default : return state
    }
}