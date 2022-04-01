import React, { useEffect } from 'react'
import "../specifedcrop/SpecifiedCrop.css"
// hooks
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
// actions
import { currentcropsetter } from '../actions/currentcropaction'
import { cropnotfoundtrue, cropnotfoundfalse } from '../actions/cropnotfoundaction'

export const Specifiedcrop = () => {

    const dispatch = useDispatch()
    const ipaddr = useSelector(state => state.ipreducer)
    const innerhtml = useSelector(state => state.innerhtmlcontroller)
    const crops = useSelector(state => state.cropreducer)
    const cropnotfound = useSelector(state => state.setcropnotfound)
    const language = useSelector(state => state.languagereducer)
    const currentcrop = useSelector(state => state.currentcropreducer)
    const { cropid } = useParams()

    useEffect(() => {
        var cropload = async () => {
            console.log(crops)
            if (crops === "") {
                var resp = await fetch(`http://${ipaddr}/crop/filtercropid`, {
                    method: 'post',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ language: language, crop_id: cropid })
                })
                    .then(response => response.json())
                    .then(json => json)
                dispatch(currentcropsetter(resp))
                dispatch(cropnotfoundtrue())
            }
            else {
                for (var i = 0; i < crops.length; i++) {
                    if (crops[i].crop_id == cropid) {
                        dispatch(currentcropsetter(crops[i]))
                        dispatch(cropnotfoundtrue())
                        break
                    }
                }
            }
        }
        cropload()
    }, [])

    var t = cropnotfound ?
        <div className='Specified_crop' >
            <div className='left_part' >
                <img className='spe_image' src={`http://${ipaddr}/image/getimage/crop/${currentcrop.banner_image}`} />
                <h1>{currentcrop.cropName}</h1>
            </div>

            <div className='right_part'>
                <div className='Detail_box' >
                    <div className='detail_title'>{innerhtml.cropdescription}</div>
                    <div className='detail_section_1'>{currentcrop.description}</div>
                </div>

                <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.typeofrop}</div>
                    <div className='detail_section'>{currentcrop.typeofcrop}</div>
                </div>
                <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.districts}</div>
                    <div className='detail_section_1'>
                        {
                            currentcrop.districts.map((element, index) => {
                                return <li key={index}>{element}</li>
                            })
                        }
                    </div>
                </div>
                {currentcrop.seedrate !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.seedrate}</div>
                    <div className='detail_section'>{currentcrop.seedrate}</div>
                </div> : null}

                {currentcrop.seedsowingperiod !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.seedsowingperiod}</div>
                    <div className='detail_section'>{currentcrop.seedsowingperiod}</div>
                </div> : null}

                {currentcrop.cropcultivationperiod !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.cropcultivationperiod}</div>
                    <div className='detail_section'>{currentcrop.cropcultivationperiod}</div>
                </div> : null
                }

                {currentcrop.variety.length !== 0 ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.variety}</div>
                    <div className='detail_section_1'>
                        {
                            currentcrop.variety.map((element, index) => {
                                return <li>{element}</li>
                            })
                        }
                    </div>
                </div> : null}

                {currentcrop.climate !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.climate}</div>
                    <div className='detail_section'>{currentcrop.climate}</div>
                </div> : null
                }
                {currentcrop.temperature !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.temprature}</div>
                    <div className='detail_section'>{currentcrop.temperature}</div>
                </div> : null
                }
                {currentcrop.soildescription !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.soildescription}</div>
                    <div className='detail_section'>{currentcrop.soildescription}</div>
                </div> : null
                }
                {currentcrop.soilph !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.soilph}</div>
                    <div className='detail_section'>{currentcrop.soilph}</div>
                </div> : null
                }

                {currentcrop.seedprocessing.length !== 0 ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.seedprocessing}</div>
                    <div className='detail_section_1'>
                        {
                            currentcrop.seedprocessing.map((element, index) => {
                                return <li key={index}>{element}</li>
                            })
                        }
                    </div>
                </div> : null
                }
                {currentcrop.landdescription !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.landdescription}</div>
                    <div className='detail_section'>{currentcrop.landdescription}</div>
                </div> : null
                }
                {currentcrop.perprationoffield.length !== 0 ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.perprationoffield}</div>
                    <div className='detail_section_1'>
                        {
                            currentcrop.perprationoffield.map((element, index) => {
                                return <li key={index}>{element}</li>
                            })
                        }
                    </div>
                </div> : null}

                {currentcrop.fertilizer !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.fertilizer}</div>
                    <div className='detail_section_1'>
                        {currentcrop.fertilizer.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                        }
                    </div>
                </div> : null
                }

                {currentcrop.irrigation !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.irrigation}</div>
                    <div className='detail_section'>{currentcrop.irrigation}</div>
                </div> : null}

                {currentcrop.harvesting.length !== 0 ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.harversting}</div>
                    <div className='detail_section_1'>
                        {
                            currentcrop.harvesting.map((element, index) => {
                                return <li key={index}>{element}</li>
                            })
                        }
                    </div>
                </div> : null}
                {currentcrop.plantprotection.length !== 0 ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.plantprotection}</div>
                    <div className='detail_section_1'>
                        {currentcrop.plantprotection.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })}
                    </div>
                </div> : null}

                {currentcrop.storage !== "" ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.storage}</div>
                    <div className='detail_section'>{currentcrop.storage}</div>
                </div> : null}

                {currentcrop.extrainfo.length !== 0 ? <div className='Detail_box'>
                    <div className='detail_title'>{innerhtml.extrainfo}</div>
                    <div className='detail_section_1'>
                        {currentcrop.extrainfo.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })}
                    </div>
                </div> : null}
            </div>
        </div> : <div>crop not found</div>
    return t
}