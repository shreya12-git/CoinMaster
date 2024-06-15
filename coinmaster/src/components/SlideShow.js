import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';
import img1 from '../assets/slide1.png';
import img2 from '../assets/slide2.png';
import img3 from '../assets/slide3.png';
import Typewriter from 'typewriter-effect';

const Example = () => {
    return (
        <Slide arrows={false}>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${img1})`, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div >
                        <Typewriter
                            options={{
                                strings: ['Finance Unleashed: Learn, Play, Experience!!'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 70,
                            }}
                        />
                        <br />
                       
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${img2})`, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        <Typewriter
                            options={{
                                strings: ['Finance Unleashed: Learn, Play, Experience!'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 70,
                            }}
                        />
                        <br></br>
                       
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${img3})`, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        <Typewriter
                            options={{
                                strings: ['Finance Unleashed: Learn, Play, Experience!'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 70,
                            }}
                        />
                        <br></br>
                       
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Example;
