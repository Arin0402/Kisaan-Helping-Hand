import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import eng_data from "../new_technology/eng_data.json"
import hindi_data from "../new_technology/hindi_data.json"
import ghar_data from "../new_technology/ghar_data.json"
import img_1 from "../new_technology/tech_image_1.jpg"
import img_2 from "../new_technology/tech_image_2.jpg"
import img_3 from "../new_technology/tech_image_3.jpg"
import img_4 from "../new_technology/tech_image_4.jpg"
import img_5 from "../new_technology/tech_image_5.jpg"
import "../new_technology/NewTech.css"

import { languageaction, innerhtmlsetter } from "../actions/languageaction.js"

function NewTech() {

    const language = useSelector(state => state.languagereducer)
    const image_array = [img_1, img_2, img_3, img_4, img_5]
    console.log(language)
    const[data, setdata] = useState(eng_data)

    useEffect(() => {
        
        if(language == "english"){
            setdata(eng_data)
        }
        else if(language == "hindi"){
            setdata(hindi_data)
        }
        else{
            setdata(ghar_data)
        }
    }, [language])
    
    return (
        <div>            

            {data.map((element, index) => (
                        
                <div key={index} className= "tech_comp" >
                    <img className='tech_image' src ={image_array[index]} ></img>
                    <div className='tech_right'>
                        <div className='tech_title'>{element.title}</div>                
                        <div className='tech_des'>{element.des}</div>
                    </div>
                    
                </div>
                    
            ))}
                
        </div>
    )
}

export default NewTech