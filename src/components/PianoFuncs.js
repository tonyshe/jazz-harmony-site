import React from 'react';
import _ from 'lodash';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import SoundfontProvider from './SoundfontProvider';
import PianoPlayer from './PianoPlayer';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

// const noteRange = {
//     first: MidiNumbers.fromNote('c3'),
//     last: MidiNumbers.fromNote('f4'),
// };
// const keyboardShortcuts = KeyboardShortcuts.create({
//     firstNote: noteRange.first,
//     lastNote: noteRange.last,
//     keyboardConfig: KeyboardShortcuts.HOME_ROW,
// });

class PianoFuncs extends React.Component {
    state = {
        recording: {
            mode: 'RECORDING',
            events: [],
            currentTime: 0,
            currentEvents: [],
            buttonText: "Play"
        },
        buttonText: "Play",
        buttonAction: this.onClickPlay
    };

    constructor(props) {
        super(props);
        this.midiNotes = props.midiNotes;
        this.noteRange = (props.firstNote && props.lastNote) ?
            { first: MidiNumbers.fromNote(props.firstNote), last: MidiNumbers.fromNote(props.lastNote) } :
            { first: MidiNumbers.fromNote('c3'), last: MidiNumbers.fromNote('f4') };
        this.firstNote = props.firstNote || 'c3'
        this.lastNote = props.lastNote || 'f4'
        this.scheduledEvents = [];
        this.width = props.width || 400
    }

    getRecordingEndTime = (notes) => {
        if (notes.length === 0) {
            return 0;
        }
        return Math.max(
            ...notes.map(event => event.time + event.duration),
        );
    };

    setRecording = value => {
        this.setState({
            recording: Object.assign({}, this.state.recording, value),
        });
    };

    onClickPlay = (notes) => {
        this.state.buttonText = "Stop"
        this.setRecording({
            mode: 'PLAYING',
        });
        const startAndEndTimes = _.uniq(
            _.flatMap(notes, event => [
                event.time,
                event.time + event.duration,
            ]),
        );
        startAndEndTimes.forEach(time => {
            this.scheduledEvents.push(
                setTimeout(() => {
                    const currentEvents = notes.filter(event => {
                        return event.time <= time && event.time + event.duration > time;
                    });
                    this.setRecording({
                        currentEvents,
                    });
                }, time * 1000),
            );
        });
        // Stop at the end if stop button has not been pressed yet

        this.stopTimer = setTimeout(() => {
            if (this.state.recording.mode === 'PLAYING') {
                this.onClickStop()
            };
        }, this.getRecordingEndTime(notes) * 1000);

    };

    onClickStop = () => {
        this.scheduledEvents.forEach(scheduledEvent => {
            clearTimeout(scheduledEvent);
        });
        clearTimeout(this.stopTimer)
        this.scheduledEvents = []
        this.state.recording.currentEvents = []
        this.state.buttonText = "Play"
        this.setRecording({
            mode: 'RECORDING',
        });
    };

    onButtonClick = (notes) => {
        if (this.state.buttonText === "Play") {
            this.onClickPlay(notes)
        } else {
            this.onClickStop()
        }
    }

    render() {
        return (
            <div>
                <div className="mt-5">
                    <SoundfontProvider
                        instrumentName="acoustic_grand_piano"
                        audioContext={audioContext}
                        hostname={soundfontHostname}
                        render={({ isLoading, playNote, stopNote }) => (
                            <PianoPlayer
                                recording={this.state.recording}
                                setRecording={this.setRecording}
                                noteRange={this.noteRange}
                                width={this.width}
                                playNote={playNote}
                                stopNote={stopNote}
                                disabled={isLoading}
                                //keyboardShortcuts={keyboardShortcuts}
                                className='piano'
                            />
                        )}
                    />
                </div>
                <div>
                    <button className="main_btn" onClick={() => this.onButtonClick(this.midiNotes)}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default PianoFuncs