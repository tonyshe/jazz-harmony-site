import React from 'react'
import PianoFuncs from '../components/PianoFuncs'


function NotesPage() {

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
                <br />NOTES PAGE
                <PianoFuncs />
            </div>
        </div>
    );
}

export default NotesPage;