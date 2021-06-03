import React ,{useState}from "react";
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>{`Current Value ${value}`}</h1>
      <button onClick={()=>setValue(value+1)}>Increase By One</button>

    </div>
  );
}

export default App;
