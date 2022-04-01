import React from 'react'
import "./dashboard.css"
import useravatar from "../images/user_avatar.jpg"
// hooks
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// action
import { loginaction } from '../actions/loginuseraction'

export const Dashboard = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.loginuserreducer)
    const ipaddr = useSelector(state => state.ipreducer)
    var prevscroll = 0
    var initialtoppos = 46

    console.log(user)

    return (
        <>
            <div className='dashboard-contianer' onLoad={() => {
                window.addEventListener('scroll', () => {
                    var usrimg = document.querySelector(".user__image")
                    var deltascroll = window.scrollY - prevscroll
                    if (window.scrollY > 20 && window.scrollY < 200 && deltascroll > 0) {
                        if (usrimg.height > 50) {
                            if(initialtoppos > 2){
                            initialtoppos = initialtoppos - 2}
                            usrimg.style.height = `${usrimg.height - 10}px`
                            usrimg.style.width = `${usrimg.width - 10}px`
                            usrimg.style.top = `${initialtoppos}%`
                        }
                    }
                    if (window.scrollY > 20 && window.scrollY < 200 && deltascroll < 0) {
                        if (usrimg.height < 200) {
                            initialtoppos = initialtoppos + 2
                            usrimg.style.height = `${usrimg.height + 10}px`
                            usrimg.style.width = `${usrimg.width + 10}px`
                            usrimg.style.top = `${initialtoppos}%`
                        }
                    }
                    if (window.scrollY < 20) {
                        usrimg.style.position = "absolute"
                        usrimg.style.height = `200px`
                        usrimg.style.width = `200px`
                        usrimg.style.top = `46%`
                    }
                    if (window.scrollY > 200) {
                        usrimg.style.position = "fixed"
                        usrimg.style.height = `50px`
                        usrimg.style.width = `50px`
                        usrimg.style.top = `${10}px`
                    }
                    prevscroll = window.scrollY
                })
            }}>
                <div className='banner'>
                    {user !== null ?
                        <img src={`http://${ipaddr}/image/getimage/${user.images.image_catagory}/${user.images.image_id}`} className="user__image" /> :
                        <img src={useravatar} className="user__image" />}
                    {user !== null ?
                        <div className='username'>{user.username}</div> :
                        <div className='empty_username'></div>}
                </div>
                <div className='dashboard__userinfo'>
                    <div className='dashboard__userinfo-label'>
                        <label>Username : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>Farmer Name : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>Farmer_id : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>Email : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>Adhar Card Number : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>Phone Number : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <lable>Address</lable>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>City : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>Village : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <label>District : </label>
                        <p></p>
                    </div>
                    <div className='dashboard__userinfo-label'>
                        <lable></lable>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}
