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
import { Area_type, land_area, fertilizer_action } from '../actions/nutrientaction'


export default function  Fertilizers_page () {

    const [npk_fertilizer , setnpk_fertilizer] = useState(46)
    const [nitrogenous, setnitrogenous] = useState(46)
    const [potassic , setpotassic] = useState(60)

    const ipaddr = useSelector(state => state.ipreducer)
    
    const innerhtml = useSelector(state => state.innerhtmlcontroller)

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

    console.log(npk_fertilizer)
    console.log(nitrogenous)
    console.log(potassic)
    
    var nutrients = [0,0,0]

    function upload(){

        nutrients[0] = npk_fertilizer;
        nutrients[1] = nitrogenous;
        nutrients[2] = potassic;

        dispatch(fertilizer_action(nutrients));

        console.log(nutrients)

        navigate("/FertilizerRequired")
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
                        Fertilizers Details
                    </div>
                    
                    <form style={{width :"100%", marginTop :"30px"}}   >
                        
                        <Grid container spacing={2}  >                            
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    defaultValue={npk_fertilizer}
                                    label =  "NPK fertilizer"
                                    fullWidth                                    
                                    onChange={(e)=>{setnpk_fertilizer(e.target.value) }}                                    
                                    variant="outlined"
                                    select
                                    
                                >  
                                    <MenuItem value ="46">Diammonium phosphate - DAP(18:46:00)</MenuItem>                                        
                                    <MenuItem value = "16" >Single super phosphate - SSP(00:16:00)</MenuItem>
                                    <MenuItem value ="48">Triple super phosphate -TSP(00:48:00)</MenuItem>                                        
                                
                                </TextField>


                            </Grid>                                
                                                        
                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    defaultValue={nitrogenous}
                                    label =  "Nitrogenous fertilizer"
                                    fullWidth                                    
                                    onChange={(e)=>{setnitrogenous(e.target.value) }}                                    
                                    variant="outlined"
                                    select
                                    
                                >  
                                    <MenuItem value ="46">Urea (46% N)</MenuItem>                                        
                                    <MenuItem value = "21" >Ammonium sulphate (21% N)</MenuItem>
                                    <MenuItem value ="25">Ammonium chloride (25% N)</MenuItem>                                        
                                
                                </TextField>
                            </Grid>        

                            <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    defaultValue={potassic}
                                    label =  "Potassic fertilizer"
                                    fullWidth                                    
                                    onChange={(e)=>{setpotassic(e.target.value) }}                                    
                                    variant="outlined"
                                    select
                                    
                                >  
                                    <MenuItem value ="60">Muriate of potash - MOP(60% K2O)</MenuItem>                                        
                                    <MenuItem value = "50" >Sulphate of potash (50% K2O )</MenuItem>                                    
                                
                                </TextField>
                            </Grid>        

                            
                            {/* <Grid item xs={12} sm={12} >                                                                            
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    defaultValue={potassic}
                                    label =  "potassic fertilizer"
                                    fullWidth                                    
                                    onChange={(e)=>{setpotassic(e.target.value) }}                                    
                                    variant="outlined"
                                    select                                    
                                >  
                                    <MenuItem value ="0.60">Muriate of potash - MOP(60% K2O)</MenuItem>                                        
                                    <MenuItem value = "0.50" >Sulphate of potash (50% K2O )</MenuItem>                                    
                                
                                </TextField>
                            </Grid>        
                            */}
                        </Grid>

                        <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }} onClick={upload} >
                            Next
                        </Button>
                        
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
