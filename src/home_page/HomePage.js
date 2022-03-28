import React from 'react'
import "../home_page/HomePage.css"
import image from "../images/image_4.jpg"
import logo from "../images/logo_1.jpg"

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
// actions
import { setcrop } from '../actions/cropsaction';
import { districtaction } from '../actions/districtaction';
import { innerhtmlsetter } from "../actions/languageaction.js"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Districtnames = {
  'english': [
    'Almora',
    'Bageshwar',
    'Chamoli',
    'Champawat',
    'Dehradun',
    'Haridwar	',
    'Nainital',
    'Pauri Garhwal',
    'Pithoragarh',
    'Rudraprayag',
    'Tehri Garhwal',
    'Udham Singh Nagar',
    'Uttarkashi'
  ],

  'hindi': [
    'अल्मोड़ा',
    'बागेश्वर',
    'चमोली',
    'चंपावत',
    'देहरादून',
    'हरिद्वार	',
    'नैनीताल',
    'पौड़ी गढ़वाल',
    'पिथौरागढ़',
    'रुद्रप्रयाग',
    'टिहरी गढ़वाल',
    'उधम सिंह नगर',
    'उत्तरकाशी'
  ],
  'garhwali': [
    'अल्मोड़ा',
    'बागेश्वर',
    'चमोली',
    'चंपावत',
    'देहरादून',
    'हरिद्वार	',
    'नैनीताल',
    'पौड़ी गढ़वाल',
    'पिथौरागढ़',
    'रुद्रप्रयाग',
    'टिहरी गढ़वाल',
    'उधम सिंह नगर',
    'उत्तरकाशी'
  ],
  'kumaoni': [
    'अल्मोड़ा',
    'बागेश्वर',
    'चमोली',
    'चंपावत',
    'देहरादून',
    'हरिद्वार	',
    'नैनीताल',
    'पौड़ी गढ़वाल',
    'पिथौरागढ़',
    'रुद्रप्रयाग',
    'टिहरी गढ़वाल',
    'उधम सिंह नगर',
    'उत्तरकाशी'
  ],


}


export function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function HomePage() {

  const dispatch = useDispatch()
  const history = useHistory()
  const language = useSelector(state => state.languagereducer)
  const [personName, setPersonName] = React.useState([]);
  const [district, setdistrict] = React.useState('');
  const innerhtml = useSelector(state => state.innerhtmlcontroller)

  const theme = useTheme();


  const handleChange = (event) => {
    setdistrict(event.target.value);
  };

  async function getCrops() {
    if (district !== "") {
      dispatch(districtaction(district))
      var resp = await fetch("http://192.168.185.14:4000/crop/filter", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ district: district, crop: "", language: language })
      })
        .then(response => response.json())
        .then(json => json)
      dispatch(setcrop(resp))
      history.push("/crop")
    }
  }
  
  async function getfirstinnerhtml(){
    
    if(Object.keys(innerhtml).length === 0){
      var recivedinnerhtml = await fetch("http://192.168.185.14:4000/getinnerhtmldata", {
        method : "post",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({language : "English"})
      })
      .then(response => response.json())
      .then(json => json)
      dispatch(innerhtmlsetter(JSON.parse(recivedinnerhtml.innerhtmldata)))
    }
  }

  
  return (
    <div onLoad={() => {
      getfirstinnerhtml()
    }}>

      <div className='HomepageBackgroundImage'>

        <img src={image} className="Image" />

        <div className='inside_back_image'>
          <div className='headline'>
            {innerhtml.mainquote}
          </div>

          <div className='Searchbar_homepage'>
            <FormControl sx={{ m: 1, minWidth: 470, marginTop: "10px", marginBottom: "10px" }}>
              <Select
                value={district}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                style={{ backgroundColor: "white" }}
              >
                <MenuItem disabled value=""><em>{innerhtml === {} ? null : innerhtml.selectyourdistrict}</em></MenuItem>
                {language !== '' ? Districtnames[language].map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                )): null}
              </Select>

            </FormControl>
            <button className='search_button' onClick={() => {
              getCrops()
            }}>
              {innerhtml.search}
            </button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default HomePage