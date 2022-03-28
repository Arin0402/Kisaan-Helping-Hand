import React from 'react'

import '../poster/poster3.css'
import pic from '../poster/randomimage.jpg';


const Poster3 = () => {
  return (
        <div className="mainborder">
            <div className="heading">
                <h1>Microporcessing</h1>
            </div>
            <div className="lists">
                <ul>
                    <li>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo rerum molestias dolorem autem. Officiis neque numquam in reiciendis nisi natus impedit earum! </li>
                    <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo rerum molestias dolorem autem. Officiis neque numquam in reiciendis nisi natus impedit earum! </li>
                    <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo rerum molestias dolorem autem. Officiis neque numquam in reiciendis nisi natus impedit earum!</li>
                </ul>
            </div>
            <div className="imagesblock">
                <div className="block1image">
                    <img src={pic} alt="" />
                    <img src={pic} alt="" />

                </div>
                <div className="block2image">
                    <img src={pic} alt="" />
                </div>
            </div>

            <div className="heading2">
                <h2>MicroProcessing 2</h2>
            </div>

            <div className="list2">
                <ul>
                    <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum quae accusamus quos nostrum rem voluptas harum, numquam quaerat quo adipisci commodi explicabo.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum quae accusamus quos nostrum rem voluptas harum, numquam quaerat quo adipisci commodi explicabo.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum quae accusamus quos nostrum rem voluptas harum, numquam quaerat quo adipisci commodi explicabo.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum quae accusamus quos nostrum rem voluptas harum, numquam quaerat quo adipisci commodi explicabo.</li>
                </ul>
            </div>
            <div className="imageblock3">
                <img src={pic} alt="" />
                <img src={pic} alt="" />

            </div>
        </div>
  )
}

export default Poster3