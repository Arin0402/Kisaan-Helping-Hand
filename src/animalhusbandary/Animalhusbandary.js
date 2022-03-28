import React,{useEffect, useState} from 'react'
import "../croppage/Croppage.css"
import { useSelector, useDispatch } from 'react-redux'
// action
import { currentcropsetter } from  "../actions/currentcropaction.js"
// hooks
import { useHistory } from 'react-router-dom'
import { innerhtmlsetter } from "../actions/languageaction.js"

export const Animalhusbandary = () => {

  const history = useHistory()    
  // const dispatch = useDispatch()
  // const crop = useSelector(state => state.cropreducer)
  // const currentcrop = useSelector(state => state.currentcropreducer)
  // const language = useSelector(state => state.languagereducer)

  const dispatch = useDispatch();
  const language = useSelector(state => state.languagereducer)

  function setSpecificCrop(event) {
      var croptobesetted = crop[event.target.getAttribute("cropindex")]
      dispatch(currentcropsetter(croptobesetted))
      console.log("puyskajsdfklj")
      history.push("/specifedcrop")
  }
  
  const [crop,setcrop] = useState([])
  async function getCrops() {
    
    var resp = await fetch("http://192.168.185.14:4000/husbandry/gethusbandry", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({language: language })
    })
      .then(response => response.json())
      .then(json => json)// http//fjdflkajdsf/image/getimage/husbandary/id
      console.log(resp)
      setcrop(resp)
      // dispatch(setcrop(resp))
    // history.push("/crop")
    
  }
  
  useEffect(() => {
    
    getCrops();
  },[]);

  console.log(crop)  
  

  return (
      <div className='croppage'>
          <div className='crop_header'>
              <div className='agriculture'>
                  Animal husbandry
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
                    <img src={`http://192.168.185.14:4000/image/getimage/husbandry/${element.husbandary_image}`} className="crop_image" cropindex={index} />
                    <div className='crop_name'>{element.husbandary_name}</div>
                    {/* <div className='crop_type' >{element.typeofcrop}</div> */}
                </div>
            
              ))}
              
          </div>
      </div>
  )
}
