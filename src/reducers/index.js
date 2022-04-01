import { combineReducers } from "redux";
import { languagereducer, innerhtmlcontroller } from "./languagereducer";
import { cropreducer } from "./cropsreducer";
import { districtreducer } from "./districtreducer";
import { currentcropreducer } from "./currentcropreducer";
import { setcropnotfound } from  "./cropnotfoundreducer";
import { blogreducer } from "./blogreducer";
import { loginuserreducer } from "./loginuserreducer";
import { setshowuser } from "./showuserreducer";
import { ipreducer } from "./ipaddressreducer";
import {NutrientsReducer, Area_type_reducer, land_area_reducer, fertilizer_reducer} from "../reducers/Nutrients_reducer.js"

const rootreducer = combineReducers({
    languagereducer,
    innerhtmlcontroller,
    cropreducer,
    districtreducer,
    currentcropreducer, // currentcropsetter(crop)
    setcropnotfound,
    blogreducer,
    loginuserreducer, // loginaction(user) , logoutaction()
    setshowuser, // showuseraction(), hideuseraction()
    ipreducer, // ipsetaction(ip) , setlocalhost()
    NutrientsReducer,
    Area_type_reducer,
    land_area_reducer,
    fertilizer_reducer

})

export default rootreducer