import React, { useState } from 'react'

import {useSpeechSynthesis} from 'react-speech-kit'

import './App.css';

function App() {

  const {speak}= useSpeechSynthesis();

  const [value,setValue]=useState("")

  return (
    <div className='speech'>
      <div className='group'>
        <h2>Text to speech converter</h2>
      </div>
      <div className='group'>
        <textarea rows={10} value={value} onChange={(e)=> setValue(e.target.value)}></textarea>
      </div>
      <div className='group'>
        <button onClick={()=> speak({text:value})}>
          speech
        </button>
      </div>
    </div>
  );
}

export default App;
