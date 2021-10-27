
import './App.css';
import {useState} from "react";
import Tempapp from "./Component/Tempapp";

function App() {
    const [city,setCity]=useState()

  return (
   <div className="App">

       <Tempapp />

   </div>
  );
}

export default App;
