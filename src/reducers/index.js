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

const rootreducer = combineReducers({
    languagereducer : languagereducer,
    innerhtmlcontroller : innerhtmlcontroller,
    cropreducer : cropreducer,
    districtreducer : districtreducer,
    currentcropreducer : currentcropreducer, // currentcropsetter(crop)
    setcropnotfound : setcropnotfound,
    blogreducer : blogreducer,
    loginuserreducer : loginuserreducer, // loginaction(user) , logoutaction()
    setshowuser : setshowuser, // showuseraction(), hideuseraction()
    ipreducer : ipreducer // ipsetaction(ip) , setlocalhost()
})

export default rootreducer