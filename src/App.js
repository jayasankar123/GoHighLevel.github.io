//import logo from './logo.svg';
import './App.css';
import React from "react";
//import Plus from "./Components/plus";
import BasicEl from "./Components/basicel";
//import Email from "./Components/email";
import Aside from "./Components/aside";

const data = {start:"plain"};

function App() {
  console.log(data);
  

  return (
    <div className="App">
      
      <BasicEl data={data}/>
      <Aside/>
    </div>
  );
}

export default App;
