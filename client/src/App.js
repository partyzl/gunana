import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import { AddPunButton, AddPunForm, PunCardList } from "./components";

function App() {
  const [isFormExpanded, setFormExpanded] = useState(false);
  const [puns, setPuns] = useState([]);

  useEffect(async () => {
    const url = "http://localhost:5000/puns";
    const resp = await fetch(url);
    // assume resp is fine
    setPuns(resp.puns);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isFormExpanded ? (
          <AddPunForm setFormExpanded={setFormExpanded} />
        ) : (
          <AddPunButton setFormExpanded={setFormExpanded} />
        )}
      </header>
      <main>
        <PunCardList puns={puns} />
      </main>
    </div>
  );
}

export default App;
