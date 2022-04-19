import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import FirstPage from './firstPage'
import SecondPage from './secondPage'
import ThirdPage from './thirdPage'
import FourthPage from './fourthPage'

function App(props) {
  const [ state, setState ] = useState('');
  const [counter, setCounter] = useState(0) 
  const handlerInc = () => { setCounter((prevCounter) => prevCounter+1) }
  const handlerDec = () => { setCounter((prevCounter) => prevCounter-1) }
  return (
    <div className="App">
     <input onChange={(event) => setState(event.target.value)} type='text' value={state}></input>
     <br/>

     <label>{state}</label>
     <br/>

     <Button onClick={() => {setState('')}}>
      Delete all text
     </Button> 
     <br/>
     
     <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<FirstPage />} 
          Route/>
          <Route 
            path="/secondPage" 
            element={<SecondPage />} 
          Route/>
          <Route 
            path="/thirdPage" 
            element={<ThirdPage counter={counter} handler={handlerInc}/>} 
          Route/>
          <Route 
            path="/fourthPage" 
            element={<FourthPage counter={counter} handler={handlerDec}/>} 
          Route/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

