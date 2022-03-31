import React, { useEffect, useState } from 'react'
import "./loginusericon.css"
// hooks
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// action
import { logoutaction } from '../actions/loginuseraction'
import { hideuseraction } from '../actions/showuseraction'

export const Loginusericon = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const x = useSelector(state => state.setshowuser)
  const ipaddr = useSelector(state => state.ipreducer)
  const user = useSelector(state => state.loginuserreducer)
  const [showprofilepanel, setshowprofilepanel] = useState(false)

  async function logoutuser(){
    var resp = await fetch("/farmer/logout")
    .then(response => response.json())
    .then(json => json)
    console.log(resp)
    if(!resp.isloggedin){
      dispatch(hideuseraction())
      setshowprofilepanel(false)
      dispatch(logoutaction())
      history.push("/")
    }
  }

  return (
    <div className='loginusericon'>
      <img onClick={(event) => {
        event.preventDefault()
        setshowprofilepanel(true)
      }}
        className='loginusericon__image' src={`http://${ipaddr}/image/getimage/${user.images.image_catagory}/${user.images.image_id}`} />
      {showprofilepanel ? <div className='profiledetail__panel_container'><div onMouseLeave={() => {
        setshowprofilepanel(false)
      }} className="profiledetail__panel">
        <div onClick={() => {
          history.push("/dashboard")
        }}>
          Dashboard
        </div>
        <div>
          Employment Taken
        </div>
        <div>
          Service Provided
        </div>
        <div onClick={() => {
          logoutuser()
        }}>
          Logout
        </div>
      </div>
      </div> : null}
    </div>
  )
}


// loginuser ko set karna hai
// setshowuser
// languagereducer
// 