import React from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import '../styles/PianoPlayer.css'
import _ from 'lodash';

import SoundfontProvider from './SoundfontProvider';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


const DURATION_UNIT = 0.2;
const DEFAULT_NOTE_DURATION = DURATION_UNIT;

class PianoWithRecording extends React.Component {
    static defaultProps = {
        notesRecorded: false,
    };

    state = {
        keysDown: {},
        noteDuration: DEFAULT_NOTE_DURATION,
    };

    onPlayNoteInput = midiNumber => {
        this.setState({
            notesRecorded: false,
        });
    };

    render() {
        const {
            playNote,
            stopNote,
            recording,
            setRecording,
            ...pianoProps
        } = this.props;

        const { mode, currentEvents } = this.props.recording;
        const activeNotes =
            mode === 'PLAYING' ? currentEvents.map(event => event.midiNumber) : null;
        return (
            <div>
                <Piano
                    playNote={this.props.playNote}
                    stopNote={this.props.stopNote}
                    onPlayNoteInput={this.onPlayNoteInput}
                    activeNotes={activeNotes}
                    {...pianoProps}
                />
            </div>
        );
    }
}

export default PianoWithRecording;
