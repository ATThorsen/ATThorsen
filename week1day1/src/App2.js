import React from 'react';
// import P from './file2';
import P from './file2';

 

function App2() {
  const {firstName, email} = P
  //const name = {males, females}

        return (
      <div className="App2">
      <p>{(firstName + email)}</p>
        
      </div>
    );
  }
  
  export default App2;

 
