const initaldistrict = ''
export const districtreducer = (state=initaldistrict, action) => {
    switch (action.type){
        case 'SETDISTRICT' : return action.district
        default : return state
    }
}