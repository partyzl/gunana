import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import { AddPunButton, AddPunForm, PunCardList } from "./components";

function App() {
  const [isFormExpanded, setFormExpanded] = useState(false);
  const [puns, setPuns] = useState([]);

    useEffect(async () => {
        const url = 'http://localhost:5000/puns'
        const resp = await fetch(url)
        const json = await resp.json()
        console.log(json)
        // assume resp is fine
        setPuns(json)
    }, [])

    useEffect(async () => {
        console.log('puns changed', puns)
    }, [puns])

  return (
    <div className="App">
      <header className="App-header">
        { isFormExpanded ?
        <AddPunForm setFormExpanded={setFormExpanded} setPuns={setPuns}/> :
        <AddPunButton setFormExpanded={setFormExpanded}/> }
      </header>
      <main>
        <PunCardList puns={puns} />
      </main>
    </div>
  );
}

export default App;
