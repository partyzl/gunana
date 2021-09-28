import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { AddPunButton, AddPunForm, PunCardList } from './Components';

function App() {

    const [isFormExpanded, setFormExpanded] = useState(false)
    const [puns, setPuns] = useState([])

    useEffect(async => {
        // resp = await fetch('')
        // setPuns(resp.puns)
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        { isFormExpanded ?
        <AddPunButton setFormExpanded={setFormExpanded}/> :
        <AddPunForm setFormExpanded={setFormExpanded}/> }
      </header>
      <main>
        <PunCardList puns={puns}/>
      </main>
    </div>
  );
}

export default App;
