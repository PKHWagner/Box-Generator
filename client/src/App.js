import './App.css';
import React, {useState} from 'react';
import BoxGenerator from './components/BoxGenerator'
import Form from './components/Form';

function App() {
  const [allBoxes, setAllBoxes]=useState([]);
  

  return (
    <div>
      <Form allBoxes={allBoxes} setAllBoxes={setAllBoxes}/>
      <BoxGenerator allBoxes={allBoxes}/>
    </div>
  );
}

export default App;
