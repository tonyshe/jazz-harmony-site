import React from 'react'
import PianoFuncs from '../components/PianoFuncs'
import piano_keys from '../img/piano_keys.jpg'
import piano_keys_all from '../img/piano_keys_all.jpg'


function NotesPage() {

    const cOctaves = [
        { "midiNumber": 36, "time": 0, "duration": 1.4 },
        { "midiNumber": 48, "time": 1.5, "duration": 1.4 },
        { "midiNumber": 60, "time": 3, "duration": 1.4 },
        { "midiNumber": 72, "time": 4.5, "duration": 1.4 },
    ]

    const fOctaves = [
        { "midiNumber": 41, "time": 0, "duration": 1.4 },
        { "midiNumber": 53, "time": 1.5, "duration": 1.4 },
        { "midiNumber": 65, "time": 3, "duration": 1.4 },
        { "midiNumber": 77, "time": 4.5, "duration": 1.4 },
    ]

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
                    <h2>Fundamental Building Blocks of Music</h2>
                    <p>
                        Unless you are 100% new to music, you’re probably familiar with a musical note.
                        They’re the fundamental building blocks of music.
                        Notes can be strung together in a series to create a melody,
                        played at the same time to create harmony, or in intervals to create rhythm.
                    </p>
                    <h2>Notes on a Piano</h2>
                    <p>
                        For these lessons, we’ll use the piano key note layout as a reference.
                        It’s one of the easiest ways to visualize the relationship between notes --
                        it’ll be more evident why as we go through later lessons.
                    </p>
                    <p>
                        Below is a diagram showing a section of a piano keyboard with the corresponding
                        notes written on them.
                    </p>
                    <img src={piano_keys} width={350} alt="Labelled notes on a piano" />
                    <p>
                        On a piano, notes are higher in pitch on the right side, and lower in pitch on the left.
                        Click on the interactive piano below and you can see this for yourself.
                    </p>
                    <PianoFuncs firstNote='c3' lastNote='b4' width={500} altText='Try for yourself! Click on the keyboard below to play a note.' />
                    <p>
                        By convention, the “C” note is often used as a central point of reference.
                        This is because it’s the tonic note of the major scale that includes all the white keys on a piano
                        (if that doesn’t make sense, don’t worry, we’ll cover that later as well!).
                    </p>
                    <h2>Octaves</h2>
                    <p>
                        Another thing to note is that the names of the keys repeat themselves.
                        The reason for this is mathematical -- notes are produced by vibrations at a specific frequency,
                        whether it’s a guitar string, or the air vibrating in a flute.
                        When one note has twice the frequency (vibrates two times faster) as another note,
                        our ears perceive it as the same note, but higher in pitch. This particular interval of notes is called an "octave".
                        It’s a little abstract, but see for yourself in the next example.
                    </p>
                    <PianoFuncs midiNotes={cOctaves} firstNote='c2' lastNote='c6' width={600} altText='The C note at different pitches' />
                    <PianoFuncs
                        midiNotes={fOctaves}
                        firstNote='c2'
                        lastNote='c6'
                        width={600}
                        altText='This also applies for other notes. Here is the F note at 4 different pitches' />
                    <PianoFuncs
                        midiNotes={twinkleStar}
                        firstNote='c3'
                        lastNote='b4'
                        width={300}
                        altText='Entire melodies can be shifted up, or down by an octave'
                    />
                    <p>
                        In Western music theory, there are twelve notes in an octave. 
                        This is because 12 is a highly divisible number, and the different frequencies that result
                        from splitting an octave this way can line up with each other, creating a pleasing sound.
                    </p>
                    <h2>Wait! What about the black keys?</h2>
                    <p>
                        Good question. While playing around with the keyboard above,
                        you may have observed that the black keys also produced distinct notes.
                        These notes are called sharps (#) and flats (b).
                        Their names reference the white notes next to them. A sharp note is a black key that
                        is higher in pitch than the key next to it. For example the note C# (C-sharp) is just
                        to the right of the C note. Conversely a flat is a note that is lower in pitch than the 
                        white note. Refer to the updated image below.
                    </p>
                    <img src={piano_keys_all} width={400}/>
                    <p>
                        Notice that there are two different note names for each black note. 
                        This is because you can use either white note next to a black to as a reference. 
                        For example, the C# note can also be described as Db (D-flat).
                    </p>
                    <h2>Okay... But Why Are the Keys in Such a Weird Order?</h2>
                    <p>
                        That's a great segue to the next lesson: Scales. There is a great amount of musical precedent
                        for particular sequences of notes. The layout of a piano is built around something called the 
                        "C-major scale." Click on the button to go to the next lesson to learn more!
                    </p>
                    <div className='pre-footer' />
                </div>

            </div>
        </div>
    );
}

export default NotesPage;