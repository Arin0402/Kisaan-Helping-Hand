import React,{useState} from 'react'
import Back_image from "../images/image_1.jpg"
import "../login/Login.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import qs from "query-string";
import { MenuItem } from '@mui/material';
import DistrictPage from '../DistrictSearch/DistrictPage';
import {useSelector} from "react-redux"

function Register() {

    // const useStyles = makeStyles((theme) => ({
    //     paper: {
    //       marginTop: theme.spacing(4),
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       // overflowY: 'scroll'
    //     },
    //     avatar: {
    //       margin: theme.spacing(1),
    //       backgroundColor: theme.palette.secondary.main,
    //     },
    //     form: {
    //       width: '100%', // Fix IE 11 issue.
    //       // marginTop: theme.spacing(3),
    //     },
    //     submit: {
    //       margin: theme.spacing(3, 0, 2),
    //     },
    //   }));
    
    // const classes = useStyles();
    const innerhtml = useSelector(state => state.innerhtmlcontroller)
    const [name,setname] = useState('')
    const [mobileNumber, setmob_number] = useState('')
    const [email , setemail] = useState('')
    const [district , setdistrict] = useState('')
    const [add,setadd] = useState('')
    const [pass, setpass] = useState('')
    const [con_pass,setcon_pass] = useState('')
    const [aadhr ,setaadhr] = useState('')
    var id = ""

    const register_user = async (id1)=>{
        console.log("inside register")
        var farmer_id = generateid()
        var resp = await fetch(`http://192.168.185.14:4000/farmer/register`, {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username : "assd",
                farmername : name,
                phone : mobileNumber,
                email : email,
                password : pass,
                address : add,
                adharcard : aadhr,
                district : district,
                farmerid : farmer_id,
                image_id : id,
                image_category : "user"
            })   
        })
        .then((res)=>{
            console.log(res)
            if(res.statusText=="OK")
                alert("Successfully registered")
            return res.json()
        })
        .then(json => json)
        .catch((error)=>{
            console.log(error)
        })
        console.log(resp)
    }
    
    
    const validate  = () =>{

        var errors = false;

        if (mobileNumber == "") {
            document.getElementById("login_mobile_error").innerHTML =
                "*Enter a valid Mobile number !";
            errors = true;
        } 
        else if(mobileNumber.length > 10){
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits only !";
            errors = true;
        }
        else if(mobileNumber.length < 10){
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits !";
            errors = true;
        }        
        else {
            document.getElementById("login_mobile_error").innerHTML = "";
            // errors = false            
        }

        if(name == ''){
            document.getElementById("name_error").innerHTML = "*Enter valid name"
            errors = true;
        }
        else{
            document.getElementById("name_error").innerHTML = ""
        }
        
        

        if(district == ""){
            document.getElementById("district_error").innerHTML = "*Select District"
            errors = true;
        }
        else{
            document.getElementById("district_error").innerHTML = ""
        }

        if(add == ""){
            document.getElementById("add_error").innerHTML = "*Enter valid address"
            errors = true;
        }
        else{
            document.getElementById("add_error").innerHTML = ""
        }

        if(pass == ""){
            document.getElementById("pass_error").innerHTML = "*Enter password"
            errors = true;
        }
        else if(con_pass == ""){
            document.getElementById("con_pass_error").innerHTML = "*Enter password"
            errors = true;
        }
        else if(pass != con_pass){
            document.getElementById("con_pass_error").innerHTML = "*Passwords do not match"
            errors = true;
        }
        else{
            document.getElementById("pass_error").innerHTML = ""
            document.getElementById("con_pass_error").innerHTML = ""
        }

        if(aadhr == "" || aadhr.length != 12 ){
            document.getElementById("adhr_error").innerHTML = "*Enter valid Aadhar number"
            errors = true;
        }
        else{ 
            document.getElementById("adhr_error").innerHTML = ""
        }

        if(!errors){
            var id = upload_image()
            register_user(id)
        }

    }
        

    

    function generateid(){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var imageid = ''

        for (var i = 0; i < 10; i++) {
            var x = characters.charAt(Math.floor(Math.random() * characters.length))
            imageid += x
        }
        return imageid
    }

    const upload_image = async ()=>{
        console.log("inside upload image")
        var image = new FormData()
        
        var imageid = generateid()
        id = imageid
        
        image.append("image", document.getElementById("userimage").files[0])
        image.append("imageid", imageid)
        image.append("catagory", "user")
        var resp = await fetch(`http://192.168.185.14:4000/image/addimage/user/${imageid}`, {
            method : "post",
            body : image
        })
        .then(response => response.json())
        .then(json => json)
        .catch((error)=>{
            console.log(error)
        })
        return imageid
    }
    
    var img_url ="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999"
    const [profile_img,setprofile_img] =useState(img_url)

    const imageHandler =(e)=>{
        const reader = new FileReader();
        
        reader.onload =() =>{
            if(reader.readyState===2){
                
              setprofile_img(reader.result)
            }
        }
        
        reader.readAsDataURL(e.target.files[0])
        
      }
    
    
  return (
    <div className='Login'>        

        <div class="fill-screen">
            <img class="make-it-fit" src = {Back_image}/>
            
            <div className='form_1'>
                
                <Container component="main"  className="form_man_1">

                    <div className="sign_in">
                        {innerhtml.register}
                    </div>

                    {/* <input type="file" id="userimage"></input>
                    <button onClick={upload_image}>upload</button> */}
                    <div className='reg_card'>
                        <div className='image_cont'>

                            <img className= "profile_img" src={profile_img} id ="img"   />

                            <input 
                                type="file"  
                                id="userimage" 
                                accept="image/*" 
                                onChange={(event)=>imageHandler(event)} 
                                style={{ display :"none"}}
                            />
                            
                            <label htmlFor="userimage" className= "label" >{innerhtml.uploadimg}</label>  
                            
                        </div>

                        <div style={{width :"800px", marginLeft :"40px" }}>
                        <form style={{width :"100%"}} noValidate >

                            <Grid container spacing={2} style={{margin :"auto"}}  >           
                                
                                <Grid item xs={6} sm={5} >                                                                              
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label={innerhtml.entername}
                                        fullWidth                                    
                                        onChange={(e)=>{setname(e.target.value)}}                                    
                                        variant="outlined"                                     
                                    />                                          
                                    <span className="mobileNumber_error_1" id="name_error"></span>                 
                                </Grid>             
                                
                            
                            
                                <Grid item xs={6} sm={5} >                                                                          
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label={innerhtml.entermobile}
                                        fullWidth                                    
                                        onChange={(e)=>{setmob_number(e.target.value)}}
                                        // defaultValue={user_name}
                                        variant="outlined"
                                        type = "number" 
                                    />                                          
                                    <span className="mobileNumber_error_1" id="login_mobile_error"></span>
                                </Grid>                          

                                <Grid item xs={8} sm={5} >                                                                              
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label= {innerhtml.enteremail}
                                        fullWidth                                    
                                        onChange={(e)=>{setemail(e.target.value)}}                                    
                                        variant="outlined"
                                        type = "email"
                                        
                                    />        
                                    <span className="mobileNumber_error_1" id="gender_error"></span>                                              
                                </Grid>       

                                <Grid item xs={8} sm={5} >                                                                              
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label={innerhtml.selectyourdistrict}
                                        fullWidth                                    
                                        onChange={(e)=>{setdistrict(e.target.value)}}                                    
                                        variant="outlined"     
                                        select                                
                                    >           
                                        <MenuItem value="Almora">Almora</MenuItem>        
                                        <MenuItem value="Bageshwar">Bageshwar</MenuItem>
                                        <MenuItem value="Chamoli">Chamoli</MenuItem>                               
                                        <MenuItem value="Champawat">Champawat</MenuItem>
                                        <MenuItem value="Dehradun">Dehradun</MenuItem>                               
                                        <MenuItem value="Haridwar">Haridwar</MenuItem>
                                        <MenuItem value="Nainital">Nainital</MenuItem>                               
                                        <MenuItem value="Pauri Garhwal">Pauri Garhwal</MenuItem>
                                        <MenuItem value="Pithoragarh">Pithoragarh</MenuItem>  
                                        <MenuItem value="Rudraprayag">Rudraprayag</MenuItem>                               
                                        <MenuItem value="Tehri Garhwal">Tehri Garhwal</MenuItem>                               
                                        <MenuItem value="Udham Singh Nagar">Udham Singh Nagar</MenuItem>                       
                                        <MenuItem value="Uttarkashi">Uttarkashi</MenuItem>                               

                                    </TextField>
                                    <span className="mobileNumber_error_1" id="district_error"></span>                                             
                                </Grid>                                      

                                <Grid item xs={8} sm={5} >                                                                          
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label={innerhtml.enterpassword}
                                        fullWidth                                    
                                        onChange={(e)=>{setpass(e.target.value)}}
                                        // defaultValue={user_name}
                                        variant="outlined"
                                        
                                    />                                          
                                    <span className="mobileNumber_error_1" id="pass_error"></span>
                                </Grid>                                                          


                                <Grid item xs={8} sm={5} >                                                                          
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label = {innerhtml.confirmpassword}
                                        fullWidth                                    
                                        onChange={(e)=>{setcon_pass(e.target.value)}}
                                        // defaultValue={user_name}
                                        variant="outlined"
                                        
                                    />                                          
                                    <span className="mobileNumber_error_1" id="con_pass_error"></span>
                                </Grid>                          
                                

                                <Grid item xs={8} sm={5} >                                                                          
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label = {innerhtml.enteradhar}
                                        fullWidth                                    
                                        onChange={(e)=>{setaadhr(e.target.value)}}
                                        // defaultValue={user_name}
                                        variant="outlined"
                                        type = "number" 
                                    />                                          
                                    <span className="mobileNumber_error_1" id="adhr_error"></span>
                                </Grid>                                                          

                                <Grid item xs={8} sm={5} >                                                                          
                                    <TextField                                
                                        id="outlined-error-helper-text"
                                        label= {innerhtml.enteraddress}
                                        fullWidth                                    
                                        onChange={(e)=>{setadd(e.target.value)}}
                                        // defaultValue={user_name}
                                        variant="outlined"
                                        
                                    />                                          
                                    <span className="mobileNumber_error_1" id="add_error"></span>                                    
                                </Grid>                          


                            </Grid>

                        </form>
                        
                        
                        <Button variant='contained' color ="primary" style ={{width :"500px", marginTop :"20px" , marginBottom :"20px" }} onClick={validate} >
                            {innerhtml.register}
                        </Button>
                        
                        </div>
                    </div>
                </Container>
            </div>
        </div>

    </div>
  )
}
export default Register

