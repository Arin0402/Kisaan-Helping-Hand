export const Nutrients_action = (na) => {
    return {
        type : 'NUTRIENTS',
        pay_load :  na
    }
}

export const Area_type = (area_type) => {
    return {
        type : "AREATYPE",
        payload : area_type
    }
}

export const land_area = (land_ar) =>{
    return {
        type : "LANDAREA",
        payload : land_ar

    }
}

export const fertilizer_action = (fer_a) =>{
    return {
        type : "FERTILIZERACTION",
        payload : fer_a

    }
}