import React from 'react';
import PianoFuncs from '../components/PianoFuncs'
import { BrowserRouter, Link } from "react-router-dom"

function IntroPage() {

    // useEffect(() => {
    //     const onScroll = e => {
    //         console.log(document.body.scrollTop)
    //         if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    //             document.getElementById("navbar").style.padding = "10px 10px";
    //         } else {
    //             document.getElementById("navbar").style.padding = "30px 10px";
    //         }
    //     }
    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // })

    return (
        <div >
            <div className="title_text">
                <h1>Intro to <br />Jazz Harmony</h1>
                <p>A beginner's interactive guide on recognizing jazz progressions and the theory behind them -- no reading sheet music required!</p>
                <div className="intro_btns">
                    <BrowserRouter>
                        <a href="/notes"><button className="main_btn">Start Learning</button></a>
                        <a href="/notes"><button className="secondary_btn">Choose a Lesson</button></a>
                    </BrowserRouter>
                </div>
            </div>
            <div className="parallax" > </div>
            <div className="cover">
                <br />So you want to learn about Jazz harmony?
                <br />
            </div>
        </div>
    );
}

export default IntroPage;