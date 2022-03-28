import React, { useState, useEffect } from 'react'
import "../Employment/Employement.css"
export const Employment = () => {

    const [users, setusers] = useState([])
    console.log(users)

    const getuser = async () => {
        console.log("hello")
        var resp = await fetch("http://192.168.185.14:4000/farmer/allfarmer")
            .then(response => response.json())
            .then(json => json)
        setusers(resp)
    }

    useEffect(() => {        
        getuser()
        console.log("hello")
    }, [])

    return (
        <div>
            
            {users.map((element, index) => (
                        
                <div key={index} className= "tech_comp" >
                    <img src={`http://192.168.185.14:4000/image/getimage/user/${element.images.image_id}`} className="tech_image"/>
                    <div className='emp_left' >
                        <div > <h3 >Name :</h3>  {element.farmername}</div>
                        <div > <h3>Email :</h3>{element.email}</div>
                        <div> <h3>Phone Number :</h3> {element.phone}</div>
                    </div>
                    <div className='emp_left'>
                        <div> <h3>Address :</h3> {element.address}</div>
                        <div> <h3>Date of join :</h3> {element.dateofjoin}</div>
                        <div> <h3>District :</h3> {element.district}</div>
                    </div>
                    
                </div>
                            
            ))}
            
            
        </div>
    )
}
