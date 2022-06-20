
import React from 'react';
import './style.css';
import Alert from "./alert.js"
import NumberBox from './NumberBox';
import Ticklebox from './TickleBox';

function sayGoodbye() {
  return "Goodbye"
}

function displayHeader(){
return <h2>About me</h2>
}


function Imageframe(props){
  return (<img src={props.ImageFile} alt={props.AltText}/>)
  
}


function DisplayMessage(props){
  return( <div>{props.whatever_message}</div> )
}

function Sum (props){
  let total = props.e1 + props.e2;
  return (<h2>{total}</h2>)
}

function App() {
  return (
    <React.Fragment>
      <h5 >Practice here</h5>
    <h1>Hello World</h1>
    <h4 style={{backgroundColor:'yellow'}}>Welcome to our first React App</h4>
    <p>{sayGoodbye()}</p>
    {displayHeader()}

   
    <Imageframe ImageFile = {require('./dog.jpg')} alt="cute dog" />
    <DisplayMessage whatever_message="Practicing react where ever you go"/>
   <Sum e1={30} e2={20}/>
   <Alert message="wakey wakey rise and shine the weather is fine"/>

   <div>
    <NumberBox initial={15}/>
   </div>
    {/* <img src={require('./logo.svg').default} alt="logo"/> */}
    <img src={require('./code.png')} alt="code"/>
    </React.Fragment>

  );
}

export default App;
