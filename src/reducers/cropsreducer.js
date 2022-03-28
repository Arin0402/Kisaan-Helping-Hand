const initalcrops = ''
export const cropreducer = (state=initalcrops, action) => {
    switch (action.type){
        case "SETCROPS" : return action.crops
        default : return state
    }
}