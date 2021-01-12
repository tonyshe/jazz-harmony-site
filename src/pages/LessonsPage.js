import React from 'react'
import PianoFuncs from '../components/PianoFuncs'
import { BrowserRouter, Link } from "react-router-dom"


function LessonsPage() {

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
            <BrowserRouter>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/notes">Notes</a></li>
                </ul>
            </BrowserRouter>
        </div>
    );
}

export default LessonsPage;