import React, { useState } from 'react'
import Back_image from "../images/image_1.jpg"
import "../login/Login.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { loginaction } from "../actions/loginuseraction.js"
import { useHistory } from "react-router-dom"
// actions
import { showuseraction } from "../actions/showuseraction.js"

function Login() {

    const ipaddr = useSelector(state => state.ipreducer)
    const dispatch = useDispatch()
    const innerhtml = useSelector(state => state.innerhtmlcontroller)
    const [mobileNumber, setmob_number] = useState('')
    const [opt_send, setopt_send] = useState(false);
    const [otp, setotp] = useState('');
    const [pass, setpass] = useState('')
    const [showotpwin, setshowotpwin] = useState(false)
    const [showerrormsg, setshowerrormsg] = useState(false)
    const history = useHistory()

    const validate = async () => {

        // errors = false

        if (mobileNumber == "") {
            document.getElementById("login_mobile_error").innerHTML =
                "*Enter a valid Mobile number !";
            // errors = true;
        }
        else if (mobileNumber.length > 10) {
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits only !";
            // errors = true;
        }
        else if (mobileNumber.length < 10) {
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits !";
            // errors = true;
        }
        else {

            document.getElementById("login_mobile_error").innerHTML = "";

            console.log("inside validate")

            var resp = await fetch(`/farmer/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                // mode : 'cors',
                // credentials: 'include',
                body: JSON.stringify({
                    phone: mobileNumber,
                    password: pass

                })
            })
                .then(response => {
                    // for(var pari of response.headers.entries()) {
                    //     console.log(pari[0] + ":" +pari[1])
                    // }
                    return response.json()
                })
                .then(json => json)
                .catch(error => {
                    console.log(error)
                })
            if (resp.isvalid) {
                setshowotpwin(true)
            }
            else {
                setshowerrormsg(true)
            }
            // console.log(resp)
            // if(resp.isvalid = true)
            //     setopt_send(true)
        }

    }

    async function authenticate(event) {
        var resp = await fetch(`/farmer/otpauth`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            // credentials : "include",
            body: JSON.stringify({ "otp": document.getElementById('otpfield').value })
        })
            .then(response => response.json())
            .then(json => json)
            .catch((error) => {
                console.log(error)
            })
        if (resp.isloggedin) {
            dispatch(loginaction(resp))
            dispatch(showuseraction())
            history.push("/dashboard")
        }
        else {
            alert("Incorrect otp")
        }
    }

    async function requestotpresend(){
        var resp = await fetch("/farmer/resendopt")
        .then(response => response.json())
        .then(json => json)
        if(resp.resendedotp){
            document.getElementById('msg').innerHTML = "Resended the otp"
        }
        else{
            document.getElementById('msg').innerHTML = "Unable to Resended the otp"
        }
    }

    return (
        <div className='Login'>

            <div class="fill-screen">
                <img class="make-it-fit" src={Back_image} />

                <div className='form'>

                    <Container component="main" className="form_man">
                        {!showotpwin ?
                            <div>
                                <div className="sign_in">
                                    {innerhtml.login}
                                </div>
                                {showerrormsg ? <div className='errormsg'>*Wrong Username or Password</div> : null}
                                {/* <form className={classes.form} noValidate  > */}
                                <form style={{ width: "100%" }} noValidate  >
                                    <Grid container spacing={2}  >
                                        <Grid item xs={12} sm={12} >
                                            <TextField
                                                id="outlined-error-helper-text"
                                                label={innerhtml.entermobile}
                                                fullWidth
                                                onChange={(e) => { setmob_number(e.target.value) }}
                                                // defaultValue={user_name}
                                                variant="outlined"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} >
                                            <TextField
                                                id="outlined-error-helper-text"
                                                label={innerhtml.enterpassword}
                                                fullWidth
                                                onChange={(e) => { setpass(e.target.value) }}
                                                // defaultValue={user_name}
                                                variant="outlined"

                                            />
                                        </Grid>
                                    </Grid>

                                </form>

                                <span className="mobileNumber_error" id="login_mobile_error"></span>
                                <Button variant='contained' color="primary" style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }} onClick={() => validate()} >
                                    Submit
                                </Button>
                            </div> :
                            <div>
                                <div id="msg"></div>
                                <TextField id='otpfield'></TextField>
                                <Button onClick={(event) => {
                                    authenticate(event)
                                }}>Verify</Button>
                                <p className='otp__resend' onClick={() => {
                                    requestotpresend()
                                }}>Resend the otp</p>
                            </div>}

                    </Container>
                </div>
            </div>
        </div>
        // <div>asdflkasjdf</div>
    )
}

export default Login

