
import React from 'react';
import './style.css';



function App() {
  return (
    <React.Fragment>
    <h1>Hello World</h1>
    <h4 style={{backgroundColor:'yellow'}}>Welcome to our first React App</h4>
    <h5 >Practice here</h5>
    {/* <img src={require('./logo.svg').default} alt="logo"/> */}
    <img src={require('./code.png')} alt="code"/>
    
</React.Fragment>

  );
}

export default App;
