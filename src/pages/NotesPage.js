import React from 'react'
import PianoFuncs from '../components/PianoFuncs'


function NotesPage() {

    const twinkleStar = [
        // First octave
        { "midiNumber": 48, "time": 0, "duration": 0.4 },
        { "midiNumber": 48, "time": 0.5, "duration": 0.4 },
        { "midiNumber": 55, "time": 1, "duration": 0.4 },
        { "midiNumber": 55, "time": 1.5, "duration": 0.4 },
        { "midiNumber": 57, "time": 2, "duration": 0.4 },
        { "midiNumber": 57, "time": 2.5, "duration": 0.4 },
        { "midiNumber": 55, "time": 3, "duration": 0.9 },
        { "midiNumber": 53, "time": 4, "duration": 0.4 },
        { "midiNumber": 53, "time": 4.5, "duration": 0.4 },
        { "midiNumber": 52, "time": 5, "duration": 0.4 },
        { "midiNumber": 52, "time": 5.5, "duration": 0.4 },
        { "midiNumber": 50, "time": 6, "duration": 0.4 },
        { "midiNumber": 50, "time": 6.5, "duration": 0.4 },
        { "midiNumber": 48, "time": 7, "duration": 0.9 },
        // Next octave
        { "midiNumber": 60, "time": 8, "duration": 0.4 },
        { "midiNumber": 60, "time": 8.5, "duration": 0.4 },
        { "midiNumber": 67, "time": 9, "duration": 0.4 },
        { "midiNumber": 67, "time": 9.5, "duration": 0.4 },
        { "midiNumber": 69, "time": 10, "duration": 0.4 },
        { "midiNumber": 69, "time": 10.5, "duration": 0.4 },
        { "midiNumber": 67, "time": 11, "duration": 0.9 },
        { "midiNumber": 65, "time": 12, "duration": 0.4 },
        { "midiNumber": 65, "time": 12.5, "duration": 0.4 },
        { "midiNumber": 64, "time": 13, "duration": 0.4 },
        { "midiNumber": 64, "time": 13.5, "duration": 0.4 },
        { "midiNumber": 62, "time": 14, "duration": 0.4 },
        { "midiNumber": 62, "time": 14.5, "duration": 0.4 },
        { "midiNumber": 60, "time": 15, "duration": 1 }]

    return (
        <div >
            <div className="lesson-title-box">
                <div className="lesson-title">Notes</div>
            </div>
            <div className="splash-image lesson-image notes-image"> </div>
            <div className="cover">
                <div className="page-text">
                    <h2>Notes</h2>
                    <p>Notes are the fundamental building blocks of music.</p>
                    <PianoFuncs midiNotes={twinkleStar} firstNote='c3' lastNote='c5' width={500} />
                    <div className='pre-footer' />
                </div>

            </div>
        </div>
    );
}

export default NotesPage;