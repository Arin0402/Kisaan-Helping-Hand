const initalcurrentcrop = ''
export const currentcropreducer = (state=initalcurrentcrop, action) => {
    switch (action.type) {
        case "SETCURRENTCROP" : return action.currentcrop
        default : return state
    }
}