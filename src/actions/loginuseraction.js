export const loginaction = (user) => {
    return {
        type : "SETLOGINUSER",
        user : user
    }
}

export const logoutaction = () => {
    return {
        type : "SETLOGOUTUSER"
    }
}