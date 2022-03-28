import React from 'react'
import '../poster/poster2.css'
import pic from '../poster/randomimage.jpg';
const Poster2 = () => {
  return (
    <div className="mainborder">
        <div className="heading">
            <h1>Vegetable Inter-cropping with Mango and Guava</h1>
        </div>
        <div className="imagesblock">
            <div className="image1block">
                <img src={pic} alt="" />
                <img src={pic} alt="" />
                <img src={pic} alt="" />
            </div>
            <div className="image1block">
                <img src={pic} alt="" />
                <img src={pic} alt="" />
            </div>
            <div className="image1block">
                <img src={pic} alt="" />
                <img src={pic} alt="" />
                <img src={pic} alt="" />
            </div>
            <div className="image1block">
                <img src={pic} alt="" />
                <img src={pic} alt="" />

            </div>


        </div>
        <div className="listblock">
            <ul>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos explicabo! Voluptatem!</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Poster2