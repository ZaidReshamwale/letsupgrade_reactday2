import logo from './logo.svg';
import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
let [score, setScore] = useState(0);
  return (
    <div className="container"> 
      <h1 className="text-primary " style={{textAlign:'center'}}> Counter App</h1>
      <h3 className="text-center mt-5"> The Score is {score} </h3>
      <div className="mt-5 text-center">
      <button onClick={()=>{(score ==25) ? setScore(25)  :setScore(score+1)}} className="mx-3 btn btn-success">Incremnet</button>
      <button onClick={()=>{ (score < 0 ) ? setScore(0) : setScore(score-1)}} className="mx-3 btn btn-dark" >Decrement</button>
      <button onClick={()=>{setScore(0)}} className="mx-3 btn btn-warning" >Reset</button>
      </div>
    </div>
      );
}

export default App;
