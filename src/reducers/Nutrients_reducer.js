const nut_array = []
export const NutrientsReducer = (state = nut_array , action) => {
    switch(action.type) {
        case "NUTRIENTS" : return action.pay_load       
        default : return state;
    }
}

const  area_ty = "kjsd"
export const Area_type_reducer = (state = area_ty , action) => {
    switch(action.type) {
        case "AREATYPE" : return action.payload       
        default : return state;
    }
}

const  land_ar = ""
export const land_area_reducer = (state = land_ar , action) => {
    switch(action.type) {
        case "LANDAREA" : return action.payload       
        default : return state;
    }
}

const  fertilizer_array = []
export const fertilizer_reducer  = (state = fertilizer_array , action) => {
    switch(action.type) {
        case "FERTILIZERACTION" : return action.payload       
        default : return state;
    }
}