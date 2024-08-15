import "./Rise.css"
import React, { useContext } from 'react';
import Aim from "./Rise_assets/Aim.jpg";
import { MyContext } from "./Context";
import './Rise.css';
import Card from "./Card"
import Mainimage from "./Rise_assets/Bigimage.jpg"

export default function Rise() {
    const items = useContext(MyContext);

    return (
        <div className="rise-content">
            <div className="rise-header">
                <div className="content">
                    <div className="riseheader">
                        <div className="rise-bg">
                            <img className="rise-mainimage" src={Mainimage} alt="" />
                        </div>
                        <div className="rise-header_content">
                            <div className="rise-name">
                                <p className='rise-R'>R</p>
                                <svg height="100" width="100" viewBox="0 0 10 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#e6c525" transform="rotate(160)">
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
                                <p className='rise-S'>S</p>
                                <p className='rise-E'>E</p>
                            </div>
                            <div className="rise-fullform">
                                <p>Reform and Innovative School Education </p>
                                <p>Gopali Youth Welfare Society</p>
                            </div>
                        </div>
                    </div>
                    <div className="rise-aim">
                        <div className='rise-text'>
                            <div className="rise-head">OUR AIM</div>
                            <div className="rise-content">
                                We aim to reform our education system by shifting it towards an <b>Organic learning</b> approach and ensuring <b>Holistic Development</b>.
                            </div>
                        </div>
                        <img className='rise-image2' src={Aim} alt="" />
                    </div>
                    <div className="rise-heading2">OUR INITIATIVES</div>
                    <div className='rise-initiatives mb-6'>
                        {items.map(item => (
                            <Card
                                key={item.title}
                                src={item.image}
                                description={item.description}
                                title={item.title}
                                color={item.color}
                                direction={item.direction}
                                titlecolor={item.titlecolor}
                                btncolor={item.btncolor}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}