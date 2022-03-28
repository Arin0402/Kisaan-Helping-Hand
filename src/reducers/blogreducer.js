const initialblog = []
export const blogreducer = (state=initialblog, action) => {
    switch(action.type) {
        case "APPENDBLOGS" : return [...state, ...action.blogs]
        default : return state
    }
}