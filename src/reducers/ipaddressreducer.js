const initalip = "192.168.250.14:4000"
export const ipreducer = (state=initalip, action ) => {
    switch(action.type) {
        case "CHANGEIP" : return action.ip
        case "LOCALHOST" : return "127.0.0.1:4000"
        default : return state
    }
}