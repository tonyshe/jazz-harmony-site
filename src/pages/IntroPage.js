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
            <div className="splash-image intro-image" >
                <div className="title_text">
                    <h1>Intro to <br />Jazz Harmony</h1>
                    <p>A beginner's interactive guide on recognizing jazz progressions and the theory behind them -- no reading sheet music required!</p>
                    <div className="intro_btns">
                        <BrowserRouter>
                            <a href="/notes"><button className="main_btn">Start Learning</button></a>
                            <a href="/lessons"><button className="secondary_btn">Choose a Lesson</button></a>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
            <div className="cover">
                <div className="page-text">
                    <h2>So you want to learn about Jazz harmony?</h2>
                    <p>Awesome! Jazz is a wonderful fusion of European, West African, and American
                    music. For many decades, it's been a medium of musical expression,
                    expanding beyond both its physical and musical borders, influencing
                    other genres all around the world. Even if jazz isn't your favorite genre,
                    there are many common themes that will help you appreciate a variety of
                    music, and help you add nuance and tension to your own creations.
                    </p>
                    <h3>Who is this for?</h3>
                    <p>Anyone who loves music and wants to understand more about
                    how its structure, whether it's to become a better musician, or
                        a more appreciative listener.</p>
                    <h3>What if I can’t read music?</h3>
                    <p>No problem! I created this site because many music tutorial sites
                    expect a minimum level of knowledge, which can deter people
                    who wants to gain some casual familiarity with music theory.
                    </p>
                    <h3>Where should I start?</h3>
                    <p>If you’ve never learned music or never played an instrument, I would start
                    at the first lesson. If you’re comfortable with that, then I would suggest
                        starting with the lesson on “chords.” </p>
                    <BrowserRouter>
                        <a href="/lessons"><button className="main_btn">Choose a Lesson</button></a>
                    </BrowserRouter>
                    <h3>Questions? Comments?</h3>
                    <p>I’m still learning too! Please send me a message.</p>
                    <div className='pre-footer'></div>
                </div>
            </div>

        </div>
    );
}

export default IntroPage;