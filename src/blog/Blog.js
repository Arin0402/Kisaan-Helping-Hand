import userpicture from "../images/user-picture.png"
import "./blog.css"
// dependencies
import React, { useEffect } from 'react'
// hooks
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// actions
import { blogappender } from '../actions/blogaction'

export const Blog = () => {

    const dispatch = useDispatch()
    const [blogpagenumber, setblogpagenumber] = useState(1)
    var blogs = useSelector(state => state.blogreducer)
    const [showblogs, setshowblogs] = useState(true) // tell wheater to show the blog or not

    async function getBlogs() {

        console.log("inside")

        var resp = await fetch(`http://192.168.185.14:4000/blog/getblog/${blogpagenumber}`)
            .then(response => response.json())
            .then(json => json)
        if (resp.length !== 0) {
            console.log('more lebgth')
            dispatch(blogappender(resp))
            setblogpagenumber(blogpagenumber + 1)
        }
    }
    
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        getBlogs()

    },[]);

    console.log(blogs)
    return (
        
        <div className="blog_page_1" onLoad = {() => {
            getBlogs()
        }}>                
         
             {showblogs ? blogs.map((element, index) => (                 
                <div  className="card_1">
                    
                    <div className="banner_blog_image_1">
                        <img className="bann_img_1" src={`http://192.168.185.14:4000/image/getimage/blog_banner/${element.blog_banner_image}`}></img>
                    </div>
                    
                    <div className="heading_1">
                        <div>{element.blog_topic}</div>
                    </div>

                    <div className="user_area_1">
                        {element.blog_owner_image !== undefined ? <div className="image_1">
                            <img  src={`http://192.168.185.14:4000/image/getimage/user/${element.blog_owner_image}`} />
                        </div> : <img src={userpicture} />}
                        <h6>{element.blog_owner_name}</h6>
                        <div className="date_blog_1">
                            <h5 className = "date_name_1" >Date: </h5>
                            <h6>{element.submissiondate.substring(0,10)}</h6>
                        </div>
                    </div> 

                    <div className="contents_1">

                        <div className="description_1">
                            <p>{element.blog_data}</p>
                        </div>
                    </div>
                </div>
            )
            ) : <div>Blogs Not Available</div>}
            
        </div> 
        
    )
}