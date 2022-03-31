import React, { useState } from 'react'
import logo from "../images/logo_1.jpg"
import { Button } from '@mui/material'
import "../Header/Header.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getStyles } from "../home_page/HomePage.js"
import { useHistory } from 'react-router-dom';
// hooks
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
// actions
import { languageaction, innerhtmlsetter } from "../actions/languageaction.js"
import { setcrop } from '../actions/cropsaction.js';
import { currentcropsetter } from "../actions/currentcropaction.js"
import { cropnotfoundfalse, cropnotfoundtrue } from '../actions/cropnotfoundaction';
import { Loginusericon } from "../loginusericon/Loginusericon.js"
import { showuseraction } from '../actions/showuseraction';
import { loginaction } from "../actions/loginuseraction.js"


function Header() {

  const history = useHistory();

  const navigate = (routepath) => {
    if (routepath) {
      history.push(routepath);
    } else {
      alert("Route path not available for this item yet");
    }
  };

  const ipaddr = useSelector(state => state.ipreducer)
  const user = useSelector(state => state.loginuserreducer)
  const showloginuser = useSelector(state => state.setshowuser)
  const language = useSelector(state => state.languagereducer)
  const innerhtml = useSelector(state => state.innerhtmlcontroller)
  const district = useSelector(state => state.districtreducer)
  const currentcrop = useSelector(state => state.currentcropreducer)
  const crop = useSelector(state => state.cropreducer)
  const dispatch = useDispatch()

  const theme = createTheme({

    palette: {

      neutral: {
        main: '#fff',
        contrastText: '#fff',
      },
    },
  });

  const languages = [
    'English',
    'Hindi',
    'Garhwali'

  ];

  async function scriptonreload() {
    var makearequest = false
    document.cookie.split("; ").map((element) => {
      var temp = element.split("=")
      if (temp[0] === 'valtoken') {
        makearequest = true
      }
    })
    if (user === null && makearequest) {
      var resp = await fetch(`/farmer/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone: -1, password: "0" })
      })
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))
      if (resp.isloggedin) {
        dispatch(loginaction(resp))
        dispatch(showuseraction())
      }
      else {
      }
    }
    if (Object.keys(innerhtml).length === 0) {
      var recivedinnerhtml = await fetch(`http://${ipaddr}/getinnerhtmldata`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language: "English" })
      })
        .then(response => response.json())
        .then(json => json)
      dispatch(innerhtmlsetter(JSON.parse(recivedinnerhtml.innerhtmldata)))
    }
  }

  useEffect(async () => {
    if (crop !== '') {
      var resp = await fetch(`http://${ipaddr}/crop/filter`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ district: district, crop: "", language: language })
      })
        .then(response => response.json())
        .then(json => json)
      dispatch(setcrop(resp))
    }
    if (currentcrop !== "") {

      var resp = await fetch(`http://${ipaddr}/crop/filtercropid`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ language: language, crop_id: currentcrop.crop_id })
      })
        .then(response => response.json())
        .then(json => json)
      if (resp !== null) {
        dispatch(currentcropsetter(resp))
        dispatch(cropnotfoundfalse())
      }
      else {
        dispatch(cropnotfoundtrue())
      }
    }
    scriptonreload()
  }, [language])

  const handleChange = async (event) => {
    var eveval = event.target.value

    setdisp_lang(event.target.value)

    dispatch(languageaction(eveval.toUpperCase()));
    var recivedinnerhtml = await fetch(`http://${ipaddr}/getinnerhtmldata`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ language: eveval })
    })
      .then(response => response.json())
      .then(json => json)
    if (recivedinnerhtml !== null) {
      dispatch(innerhtmlsetter(JSON.parse(recivedinnerhtml.innerhtmldata)))
    }
  };

  const [disp_lang, setdisp_lang] = useState('English');


  return (
    <div className='main_header'>
      <div className='Homepage_middle_header'>
        <img src={logo} className="header_logo" />

        <div className='language_select'>
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
          <Select
            value={disp_lang}
            onChange={handleChange}
            displayEmpty

            inputProps={{ 'aria-label': 'Without label' }}
            style={{ backgroundColor: "white", height: "30px" }}
          >

            {/* <MenuItem disabled value=""><em> Select language</em></MenuItem> */}

            {languages.map((name) => {
              return <MenuItem
                key={name}
                value={name}
                style={getStyles(name, "Hindi", theme)}
              >
                {name}
              </MenuItem>

            })}
          </Select>

          {/* </FormControl> */}
        </div>

        {/* {valid_user.length == 0  ? */}
        {!showloginuser ? <div className='login_buttons'>
          <ThemeProvider theme={theme}>
            <Button onClick={() => navigate("/Register")} variant='outlined' color="neutral" style={{ float: "right", marginLeft: "10px", marginRight: "10px", marginTop: "20px" }}>{innerhtml.register}</Button>
            <Button onClick={() => navigate("/Login")} variant='outlined' color="neutral" style={{ float: "right", marginLeft: "10px", marginRight: "10px", marginTop: "20px" }}>{innerhtml.login}</Button>
          </ThemeProvider>
        </div> : <Loginusericon />}
        {/* :
          <div className='login_buttons'>
            <img src = {`http://${ipaddr}/image/getimage/user/${valid_user.images.image_id}`}></img>
          </div> 
         }   */}

      </div>
      <div className='Homepage_lower_header'>
        <div className='Homepage_lower_header_sub_1'>

          <div className='Homepage_lower_header_tab' onClick={() => navigate("/")}  >{innerhtml === {} ? null : innerhtml.home}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/agriculture")} >{innerhtml === {} ? null : innerhtml.agriculture}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/animalhusbandary")} >{innerhtml === {} ? null : innerhtml.animalhusbandary}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/governmentschemes")} >{innerhtml === {} ? null : innerhtml.governmentschemes}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/newtechnology")} >{innerhtml === {} ? null : innerhtml.newfarmingtechnology}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/kissancreditcard")} >{innerhtml === {} ? null : innerhtml.fertilizercalculator}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/employment")} >{innerhtml === {} ? null : innerhtml.employment}</div>
          <div className='Homepage_lower_header_tab' onClick={() => navigate("/blog")} >{innerhtml === {} ? null : innerhtml.blog}</div>

        </div>

      </div>

    </div>
  )
}

export default Header