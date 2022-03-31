export const ipsetaction = (ip) => {
    return {
        type : "CHANGEIP",
        ip : ip
    }
}

export const settolocalhost = () =>{
    return {
        type : "LOCALHOST"
    }
}