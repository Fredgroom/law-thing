import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("name");
  const [name2, setName2] = useState("name2");

  return (
    <div className="App">
      <header className="App-header">
        <p>This is the demo for this app</p>
        <p>test</p>
        <label>
          name
          <p>{name}</p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <p>{name2}</p>
          <input type="text" onChange={(e) => setName2(e.target.value)} />
        </label>
        <p>
          This would be name one {name} and this would be {name2}
        </p>
      </header>
    </div>
  );
}

export default App;
