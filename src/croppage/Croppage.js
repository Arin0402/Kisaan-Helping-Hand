import React from 'react'
import { Link } from 'react-router-dom'
import "../croppage/Croppage.css"
// hooks
import { useSelector, useDispatch } from 'react-redux'
// action
import { currentcropsetter } from  "../actions/currentcropaction.js"
// hooks
import { useHistory } from 'react-router-dom'

export const Croppage = () => {

    const history = useHistory()    
    const dispatch = useDispatch()
    const crop = useSelector(state => state.cropreducer)

    const currentcrop = useSelector(state => state.currentcropreducer)

    function setSpecificCrop(event) {
        var croptobesetted = crop[event.target.getAttribute("cropindex")]
        dispatch(currentcropsetter(croptobesetted))
        history.push("/specifedcrop")
    }
    
    console.log(crop)
    
    return (

        
        // crop.map((element, index) => {
        //     return (
        //         <div key={index} cropindex={index} onClick={
        //             (event) => {
        //                 setSpecificCrop(event)
        //             }
        //         }>
        //             <img src={`http://192.168.185.14:4000/image/getimage/crop/${element.banner_image}`} cropindex={index} />
        //             <p>{element.cropName}</p>
        //             <p>{element.typeofcrop}</p>
        //         </div>
        //     )
        // })
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
                            <img src={`http://192.168.185.14:4000/image/getimage/crop/${element.banner_image}`} className="crop_image" cropindex={index} />
                            <div className='crop_name'>{element.cropName}</div>
                            <div className='crop_type' >{element.typeofcrop}</div>
                        </div>
                 
                    
                ))}
                
            </div>
        </div>
    )
}
