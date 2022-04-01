import React from 'react'
// hooks
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import Back_image from "../images/image_1.jpg"
import "../login/Login.css"
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '@mui/material'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import { Area_type, land_area } from '../actions/nutrientaction'


export default function  FertilizerRequired () {

    
    const dispatch = useDispatch();
    const language = useSelector(state => state.languagereducer)

   

    const history = useHistory();

    const navigate = (routepath) => {
        if (routepath) {
        history.push(routepath);
        } else {
        alert("Route path not available for this item yet");
        }
    };


        
    const area_type_red = useSelector((state)=> state.Area_type_reducer)  
    const land_area_red = useSelector((state)=> state.land_area_reducer)  
    const nutrients_array = useSelector((state)=> state.NutrientsReducer)  
    const fertilizers_array = useSelector((state)=> state.fertilizer_reducer)  
    
    console.log(area_type_red)
    console.log(land_area_red)
    console.log(nutrients_array)
    console.log(fertilizers_array)

    const DAP = (parseInt(nutrients_array[0])*parseInt(land_area_red)*100)/parseInt(fertilizers_array[0])
    const urea = (parseInt(nutrients_array[1])*parseInt(land_area_red)*100)/parseInt(fertilizers_array[1]) 
    const MOP = (parseInt(nutrients_array[2])*parseInt(land_area_red)*100)/parseInt(fertilizers_array[2]) 
    function upload(){

    }
        
    return (       
        <div>
          <div className='Login'>        

        <div class="fill-screen">
            <img class="make-it-fit" src = {Back_image}/>
            
            <div className='form_1'>
                
                <Container component="main"  className="form_man">
                    <div className="sign_in">
                        {/* {innerhtml.fertilizercalculator} */}
                        Fertilizer Required
                    </div>
                    
                    <form style={{width :"100%", marginTop :"30px", marginBottom:"30px"}}   >
                        
                        <Grid container spacing={2}  >                            
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    // defaultValue={area_type}
                                    label = "Diammonium phosphate (DAP) in Kg"
                                    fullWidth                        
                                    value = {DAP}            
                                    // onChange={(e)=>{setarea_type(e.target.value) }}                                    
                                    variant="outlined"
                                    
                                    
                                >                                                                  
                                </TextField>

                            </Grid>                                
                                                        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Urea in Kg"
                                    fullWidth           
                                    required
                                    value={urea}
                                    // onChange={(e)=>{setLand_area(e.target.value)}}                                    
                                    variant="outlined"
                                    // type = "number" 
                                />                                          
                            </Grid>        

                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Muriate of potash (MOP) in Kg"
                                    fullWidth           
                                    required
                                    value={MOP}
                                    // onChange={(e)=>{setcrop_name(e.target.value)}}                                    
                                    variant="outlined"
                                    
                                />                                          
                            </Grid>        

                        </Grid>

                        
                        {/* <input type = "submit"/> */}

                        
                     </form>     
                    {/* <form action=''>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required></input>
                        <input type="submit" />
                    </form> */}

                    
                        
                    
                
                </Container>
            </div>
        </div>

        </div>

    </div>
    )
}
