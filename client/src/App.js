import React, {useState} from 'react';
import DisplayBox from './components/DisplayBox';
import FormBox from './components/FormBox'; 
import './App.css';

function App() {
  const [colorArray, setColorArray] = useState([]);

  return (
    <div className="App">
      <FormBox colorArray={colorArray} setColorArray={setColorArray}/>
      <DisplayBox colorArray={colorArray}/>
    </div>
  );
}

export default App;
