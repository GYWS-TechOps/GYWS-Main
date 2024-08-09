import "./Rise.css"
import React, { useContext } from 'react';
import Aim from "./Rise/Aim.jpg";
import { MyContext } from "./Context";
import './Rise.css';
import Card from "./Rise/Card"
import Mainimage from "./Rise/Bigimage.jpg"

export default function Rise() {
    const items = useContext(MyContext);
    //console.log(MyContext)
    

    return (
        <div className="content">

            <div className="riseheader" >
                <div class="rise-bg">
                <img className="mainimage" src={Mainimage} alt="" />
                </div>
                <div className="rise_header_content">
                    <div className="risename">
                        <p className='Risenamew'> R</p>

                        <svg height="70" width="100" viewBox="0 0 10 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#e6c525" transform="rotate(160)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>pencil</title>
                                <desc>Created with Sketch Beta.</desc>
                                <defs></defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Icon-Set-Filled" transform="translate(-583.000000, -101.000000)" fill="#e6c525">
                                        <path d="M583,123 L589,123 L589,110 L583,110 L583,123 Z M586,133.009 L589,125 L583,125 L586,133.009 L586,133.009 Z M587,101 L585,101 C583.367,100.963 582.947,101.841 583,103 L583,108 L589,108 L589,103 C589.007,101.788 588.635,101.008 587,101 L587,101 Z" id="pencil"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <p className='S'>S</p>
                        <p className='E'>E</p>
                    </div>
                    <div className="risefullform">
                        <p>Reform and Innovative School Education </p>
                        <p>Gopali Youth Welfare Society</p>
                    </div>
                </div>

            </div>

            <div className="aim">
                <img className='image1' src="https://light.org.in/img/1.png" alt="" />
                <div className='text'>
                    <div className="head">OUR AIM</div>
                    <div className="content">
                        We aim to reform our education system by shifting it towards an <b>Organic learning</b> approach and ensuring <b>Holistic Development</b>.
                    </div>
                </div>
                <img className='image2' src={Aim} alt="" />
            </div>

            <div className="heading2">OUR INITIATIVES</div>
            <div className='initiatives mb-6'>
                {items.map(item => (
                    <Card
                        key={item.title}
                        src={item.image}
                        description={item.description}
                        title={item.title}
                        color={item.color}
                        direction={item.direction}
                        titlecolor={item.titlecolor}

                    />
                ))}
            </div>

        </div >
    );
}
