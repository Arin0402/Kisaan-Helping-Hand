const initialloginuser = null
export const loginuserreducer = (state=initialloginuser, action) => {
    switch(action.type) {
        case "SETLOGINUSER" : return action.user
        default : return state
    }
}