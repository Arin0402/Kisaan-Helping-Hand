import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../croppage/Croppage.css"
// hooks
import { useSelector, useDispatch } from 'react-redux'
// action
import { setcrop } from '../actions/cropsaction'
import { currentcropsetter } from "../actions/currentcropaction.js"
// hooks
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const Croppage = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const { district } = useParams()
    const language = useSelector(state => state.languagereducer)
    const crop = useSelector(state => state.cropreducer)
    const ipaddr = useSelector(state => state.ipreducer)
    const currentcrop = useSelector(state => state.currentcropreducer)

    function setSpecificCrop(event) {
        console.log(event.target.getAttribute('cropindex'))
        history.push(`/specifedcrop/${event.target.getAttribute("cropindex")}`)
    }

    useEffect(() => {
        console.log("requesting the resource")
        var croploader = async () => {
            var resp = await fetch(`http://${ipaddr}/crop/filter`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ district: district, crop: "", language: language })
            })
                .then(response => response.json())
                .then(json => json)
            dispatch(setcrop(resp))
        }
        croploader()
    }, [])

    return (
        <div className='croppage'>
            <div className='crop_header'>
                <div className='agriculture'>
                    Agriculture
                </div>
            </div>
            <div className='agri_section'>

                {crop !== "" ? crop.map((element, index) => (

                    <div key={index} cropindex={index} className="crop_block" onClick={
                        (event) => {
                            setSpecificCrop(event)
                        }

                    }>
                        <img src={`http://${ipaddr}/image/getimage/crop/${element.banner_image}`} className="crop_image" cropindex={index} />
                        <div className='crop_name'>{element.cropName}</div>
                        <div className='crop_type' >{element.typeofcrop}</div>
                    </div>


                )) : <div>
                        hello
                    </div>}

            </div>
        </div>
    )
}
