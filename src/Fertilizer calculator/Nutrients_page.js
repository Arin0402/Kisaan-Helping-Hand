import React from 'react'
// hooks
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Back_image from "../images/image_1.jpg"
import "../login/Login.css"
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '@mui/material'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Nutrients_action} from "../actions/nutrientaction"
import { Button } from '@mui/material';
import {useDispatch} from "react-redux"

export default function  Nutrients_page () {

    const dispatch = useDispatch();

    const nutrients_array = useSelector((state)=>state.NutrientsReducer);

    console.log(nutrients_array)
    const [nitrogen, setnitrogen] = useState(0)
    const [phosporus, setphospours] = useState(0)
    const [potash, setpotash] = useState(0)
    const [urea, seturea] = useState(0)
    const innerhtml = useSelector(state => state.innerhtmlcontroller)
    const language = useSelector(state => state.languagereducer)
    const history = useHistory();

    const navigate = (routepath) => {
        if (routepath) {
        history.push(routepath);
        } else {
        alert("Route path not available for this item yet");
        }
    };

    var nutrients = [0,0,0,0,0,0]

    
    function update_array(name, val){
        switch (name){
            case "Nitro" : {
                nutrients[0] = val
                break;
            }
            case "phos" : {
                nutrients[1] = val
                break;
            }
            case "pot" : {
                nutrients[2] = val
                break;
            }
            case "Zinc" : {
                nutrients[3] = val
                break;
            }
            case "Boro" : {
                nutrients[4] = val
                break;
            }
            case "iron" : {
                nutrients[5] = val;
                
            }

        }
        
    }
    
    function upload(){
        dispatch(Nutrients_action(nutrients));
        console.log(nutrients)
        navigate("/FertilizersPage")
    }
        
    return (       
        <div>
          <div className='Login'>        

        <div class="fill-screen">
            <img class="make-it-fit" src = {Back_image}/>
            
            <div className='form_1'>
                
                <Container component="main"  className="form_man_2">
                    <div className="sign_in">
                        {/* {innerhtml.fertilizercalculator} */}
                        Nutrients Details
                    </div>
                    
                    <form style={{width :"100%"}} onSubmit= {()=>upload()}  >
                        <div style={{display :"flex"}}>
                        <Grid container spacing={2} style={{marginRight :"20px"}}  >                            
                            
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Enter recommended Nitrogen"                                    
                                    fullWidth                                    
                                    onChange={(e)=>{ update_array("Nitro", e.target.value)}}                                    
                                    variant="outlined"
                                    required
                                    type = "number"
                            />  
                                
                            </Grid>                                
                                                        
                            <Grid item xs={12} sm={12} >                                                                            

                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Enter recommended Phosphate"
                                    fullWidth           
                                    required
                                    onChange={(e)=>{update_array("phos", e.target.value)}}                                    
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        

                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Enter recommended potash"
                                    fullWidth           
                                    required
                                    onChange={(e)=>{update_array("pot", e.target.value)}}                                    
                                    variant="outlined"
                                    type = "number"
                                    
                                />                                          
                            </Grid>        

                        </Grid>

                        <Grid container spacing={2}  >                            
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Enter recommended Zinc"
                                    fullWidth           
                                    
                                    onChange={(e)=>{update_array("Zinc", e.target.value)}}                                    
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        

                                                        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Enter recommended Boron"
                                    fullWidth           
                                    
                                    onChange={(e)=>{update_array("Boro", e.target.value)}}                                    
                                    variant="outlined"
                                    type = "number" 
                                />                                          
                            </Grid>        

                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label = "Enter recommended Iron"
                                    fullWidth           
                                    
                                    onChange={(e)=>{update_array("iron", e.target.value)}}                                    
                                    variant="outlined"
                                    type = "number"
                                    
                                />                                          
                            </Grid>        

                        </Grid>

                        </div>

                        <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }} type = "submit" >
                            Next
                        </Button>
                        
                     </form>     
                    
                </Container>
            </div>
        </div>

        </div>

    </div>
    )
}
