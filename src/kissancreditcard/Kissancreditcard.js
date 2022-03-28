
import Back_image from "../images/image_1.jpg"
import "../login/Login.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';


// function Kissancreditcard() {

  
//   const [crop_name, setcrop_name] = useState('');
//   const [area , setarea] = useState('')

//   return (
    // <div className='Login'>        

    //     <div class="fill-screen">
    //         <img class="make-it-fit" src = {Back_image}/>
            
    //         <div className='form'>
                
    //             <Container component="main"  className="form_man">
    //                 <div className="sign_in">
    //                     Fertilizer Calculator
    //                 </div>
                    
    //                 <form style={{width :"100%"}} noValidate  >
    //                     <Grid container spacing={2}  >                            
    //                         <Grid item xs={12} sm={12} >                                                                            
    //                             <TextField                                
    //                                 id="outlined-error-helper-text"
    //                                 label="Enter Crop name"
    //                                 fullWidth                                    
    //                                 onChange={(e)=>{setcrop_name(e.target.value)}}                                    
    //                                 variant="outlined"

    //                             />                                          
    //                         </Grid>                                
    //                         <Grid item xs={12} sm={12} >                                                                            
    //                             <TextField                                
    //                                 id="outlined-error-helper-text"
    //                                 label="Enter area in acres"
    //                                 fullWidth                                    
    //                                 onChange={(e)=>{setarea(e.target.value)}}                                    
    //                                 variant="outlined"
    //                                 type = "number" 
    //                             />                                          
    //                         </Grid>                                
    //                     </Grid>

    //                 </form>
                    
    //                 <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }}  >
    //                     Submit
    //                 </Button>
                  
    //             </Container>
    //         </div>
    //     </div>

    // </div>
//     // <div>asdflkasjdf</div>
//   )
// }

// export default Kissancreditcard


import React,{useState} from 'react'
import { MenuItem } from "@material-ui/core";

export const Kissancreditcard = () => {

  const [crop_name, setcrop_name] = useState('');
  const [area , setarea] = useState(0)
  const [ph,setph] = useState('')
  const [soil_name, setsoil_name] = useState('')
  const [answer,setanswer] = useState('')

  var wheat_f = 30;
  var Corn_f = 12;
  var maize_f = 10;
  var Peach_f = 34;

  console.log(crop_name)
  console.log(area)
  console.log(ph)
  console.log(soil_name)
  console.log(answer)

  const[cal_done, setcal_done] = useState(false)

  function calculate(){
    if(crop_name =="wheat"){
      setanswer(area*wheat_f);    
    }
    else if(crop_name =="Corn"){
      setanswer(area*Corn_f);    
    }
    else if(crop_name =="Maize"){
      setanswer(area*maize_f);    
    }
    else if(crop_name =="peach"){
      setanswer(area*Peach_f);    
    }

    setcal_done(true)

  }

  return (
    <div>
          <div className='Login'>        

<div class="fill-screen">
    <img class="make-it-fit" src = {Back_image}/>
    
    <div className='form_1'>
        
        <Container component="main"  className="form_man">
            <div className="sign_in">
                Fertilizer Calculator
            </div>
            
            <form style={{width :"100%"}} noValidate  >
              
                <Grid container spacing={2}  >                            
                    <Grid item xs={12} sm={12} >                                                                            
                        <TextField                                
                            id="outlined-error-helper-text"
                            label="Select Crop name"
                            fullWidth                                    
                            onChange={(e)=>{setcrop_name(e.target.value)}}                                    
                            variant="outlined"
                            select
                        >  
                        <MenuItem value ="wheat">Wheat</MenuItem>                                        
                        <MenuItem value = "Corn" >Corn</MenuItem>
                        <MenuItem value = "Maize" >Maize</MenuItem>
                        <MenuItem value = "peach" >peach</MenuItem>
                        </TextField>


                    </Grid>                                
                    <Grid item xs={12} sm={12} >                                                                            
                        <TextField                                
                            id="outlined-error-helper-text"
                            label="Select Soil"
                            fullWidth                                    
                            onChange={(e)=>{setsoil_name(e.target.value)}}                                    
                            variant="outlined"
                            select
                        >  
                          <MenuItem value ="Sandy soil">Sandy soil</MenuItem>                                        
                          <MenuItem value = "Clay Soil"> Clay Soil</MenuItem>
                          <MenuItem value = "Silt Soil" > Slit Soil</MenuItem>
                          <MenuItem value = "Chalk Soil">Chalk Soil</MenuItem>
                        </TextField>
                        
                    </Grid>                               

                    <Grid item xs={12} sm={12} >                                                                            
                        <TextField                                
                            id="outlined-error-helper-text"
                            label="Enter the Ph "
                            fullWidth                                    
                            onChange={(e)=>{setph(e.target.value)}}                                    
                            variant="outlined"
                            type = "number" 
                        />                                          
                    </Grid>                                

                    <Grid item xs={12} sm={12} >                                                                            
                        <TextField                                
                            id="outlined-error-helper-text"
                            label="Enter area in acres"
                            fullWidth                                    
                            onChange={(e)=>{setarea(e.target.value)}}                                    
                            variant="outlined"
                            type = "number" 
                        />                                          
                    </Grid>        

                  {cal_done ?
                  <Grid item xs={12} sm={12} >                                                                            
                  <TextField                                
                      id="outlined-error-helper-text"
                      label="Total fertilizer required"
                      fullWidth                                    
                      value={answer}
                      variant="outlined"
                      
                  />                                          
              </Grid>        
                  :
                  null}


                </Grid>
                

            </form>    

            <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }} onClick = {()=>calculate()} >
                Calculate
            </Button>
          
        </Container>
    </div>
</div>

</div>

    </div>
  )

}