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
            <div className="parallax" > </div>
            <div className="cover">
                <br />So you want to learn about Jazz harmony?
                <PianoFuncs />
                <BrowserRouter>
                    <a href="/notes">test</a>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default IntroPage;