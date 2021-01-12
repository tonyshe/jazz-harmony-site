import logo from './logo.svg';
import './App.css';
import PianoPlayer from './components/PianoPlayer'
import PianoFuncs from './components/PianoFuncs'
import { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import IntroPage from './pages/IntroPage'
import NotesPage from "./pages/NotesPage"
import LessonsPage from "./pages/LessonsPage"


function App() {

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
        <div className="App" >
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={IntroPage} />
                    <Route path="/notes" exact component={NotesPage} />
                    <Route path="/lessons" exact component={LessonsPage} />
                </Switch>
            </BrowserRouter>
        </div >

    );
}

export default App;