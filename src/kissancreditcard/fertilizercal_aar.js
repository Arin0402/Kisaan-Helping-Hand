import React from 'react'
// hooks
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Back_image from "../images/image_1.jpg"
import "../login/Login.css"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '@mui/material'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';


export const Kissancreditcard = () => {

    const [district, setdistrict] = useState([])
    const [crop_name ,setcrop_name] = useState('')
    const [land_area ,setland_area] = useState('')
    const [nitrogen, setnitrogen] = useState(0)
    const [phosporus, setphospours] = useState(0)
    const [potash, setpotash] = useState(0)
    const [urea, seturea] = useState(0)
    const [amountofcrop, setamountofcrop] = useState(0)
    const [showfertilizer, setshowfertilizer] = useState(false)
    const [fertilizerlist, setfertilizerlist] = useState([])
    const [total_data , settotal_data] = useState([])
    const [cal_done, setcal_done] = useState(false)

    const innerhtml = useSelector(state => state.innerhtmlcontroller)

    const language = useSelector(state => state.languagereducer)

    useEffect(() => {
        console.log("thisis is thasd kfj")
        setshowfertilizer(true)
    }, [potash])


    async function calculate() {

        console.log("dasf")
        console.log(language)
        var resp = await fetch("http://192.168.185.14:4000/crop/filter", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ language: language, crop: crop_name.toUpperCase(), district: "" })
        })
            .then((response) =>{
                
                 return response.json()
            })
            .then(json => json)
            .catch((error)=>{
                console.log(error)
            })

        settotal_data(resp[0])
        setcal_done(true);
        console.log(resp)
        

        // if (resp.length !== 0) {
        //     setdistrict(resp.districts)
        //     setnitrogen(resp.nitrogen_per_hacter)
        //     setphospours(resp.phosphrus_per_hacter)
        //     seturea(resp.urea_per_hacter)
        //     setpotash(resp.potash_per_hacter)
        //     setfertilizerlist([nitrogen, phosporus, potash, urea])
        //     setamountofcrop(resp.amountofcrop)
        // }
        // console.log(fertilizerlist)
        // console.log(amountofcrop)
    }

    console.log(total_data)

    function setprev(){
        setcal_done(false)
    }
        
    return (
        // <div>
        //     <div>
        //         <label>Crop Name</label>
        //         <input type={"text"} id="cropinput" onChange={(e)=>setcrop_name(e.target.value)} />
        //     </div>
        //     <div>
        //         <label>Land Area</label>
        //         <input type={"text"} onChange={(e)=>setland_area(e.target.value)} />
        //     </div>
        //     <div>
        //         <button onClick={(event) => calculate(event)}>calculate</button>
        //     </div>
        //     <div>
               
        //         {total_data.nitrogen_per_hacter}
        //         {total_data.phosphrus_per_hacter}
        //     </div>
        // </div>

        <div>
          <div className='Login'>        

        <div class="fill-screen">
            <img class="make-it-fit" src = {Back_image}/>
            
            <div className='form_1'>
                
                <Container component="main"  className="form_man">
                    <div className="sign_in">
                        {innerhtml.fertilizercalculator}
                    </div>
                    
                    <form style={{width :"100%"}} noValidate  >
                        {!cal_done ?
                        <Grid container spacing={2}  >                            
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label= {innerhtml.selectcropname}
                                    fullWidth                                    
                                    onChange={(e)=>{setcrop_name(e.target.value)}}                                    
                                    variant="outlined"
                                    select
                                >  
                                <MenuItem value ="wheat">Wheat</MenuItem>                                        
                                <MenuItem value = "Tomato" >Tomato</MenuItem>
                                <MenuItem value = "Maize" >Maize</MenuItem>
                                <MenuItem value = "peach" >peach</MenuItem>
                                </TextField>


                            </Grid>                                
                                                        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label={innerhtml.fieldarea}
                                    fullWidth                                    
                                    onChange={(e)=>{setland_area(e.target.value)}}                                    
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        

                        </Grid>

                        :

                        <Grid  container spacing={2}>
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label="Amount of seed required per acre"
                                    fullWidth                                    
                                    
                                    value={total_data.amountofcrop*land_area }
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label="Nitrogen required per acre"
                                    fullWidth                                    
                                    
                                    value={total_data.nitrogen_per_hacter*land_area }
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label="Phosphorous required per acre"
                                    fullWidth            
                                                          
                                    value={total_data.phosphrus_per_hacter*land_area }
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label="Potash required per acre"
                                    fullWidth      
                                                                  
                                    value={total_data.potash_per_hacter*land_area }
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label="Urea required per acre"
                                    fullWidth                 
                                      
                                    value={total_data.urea_per_hacter*land_area }
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        
                            <Button onClick={() => {
                                setprev()
                            }}>go back</Button>
                        </Grid>}

                    </form>    
                    {cal_done ? null :
                        <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }} onClick = {()=>calculate()} >
                            Calculate
                        </Button>
                    }   
                
                </Container>
            </div>
        </div>

        </div>

    </div>
    )
}
