import React,{useEffect, useState} from 'react'
import "../croppage/Croppage.css"
import { useSelector, useDispatch } from 'react-redux'
// action
import { currentcropsetter } from  "../actions/currentcropaction.js"
// hooks
import { useHistory } from 'react-router-dom'
import { innerhtmlsetter } from "../actions/languageaction.js"

export const Agriculturepage = () => {


  const history = useHistory()    
  // const dispatch = useDispatch()
  // const crop = useSelector(state => state.cropreducer)
  // const currentcrop = useSelector(state => state.currentcropreducer)
  // const language = useSelector(state => state.languagereducer)

  const dispatch = useDispatch();
  const language = useSelector(state => state.languagereducer)

  function setSpecificCrop(event) {
    console.log(crop)
      var croptobesetted = crop[event.target.getAttribute("cropindex")]
      console.log(currentcropsetter)
      dispatch(currentcropsetter(croptobesetted))
      history.push("/specifedcrop")
  }
  
  const [crop,setcrop] = useState([])
  async function getCrops() {
    
    var resp = await fetch("http://192.168.185.14:4000/crop/filter", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ district: "", crop: "", language: language })
    })
      .then(response => response.json())
      .then(json => json)
      console.log(resp)
      setcrop(resp)
      // dispatch(setcrop(resp))
    // history.push("/crop")
    
  }
  
  useEffect(() => {
    
    getCrops();
  },[]);

  // console.log(crop)

  return (
      <div className='croppage'>
          <div className='crop_header'>
              <div className='agriculture'>
                  Agriculture
              </div>              
          </div>

          <div className='agri_section'>
              
              {crop.map((element, index) => (
                  
                <div key={index} cropindex={index} className="crop_block" onClick={
                    (event) => {
                        setSpecificCrop(event)
                    }                    
                }>
                {/* <div> */}
                    <img src={`http://192.168.185.14:4000/image/getimage/crop/${element.banner_image}`} className="crop_image" cropindex={index} />
                    <div className='crop_name'>{element.cropName}</div>
                    <div className='crop_type' >{element.typeofcrop}</div>
                </div>
            
              ))}
              
          </div>
      </div>
  )
}
