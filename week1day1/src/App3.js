import React from 'react';

import names from './file2';

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  

  function WelcomePerson(props) {
    const {firstName,lastName, email} = props
    return <h1>Hello, {(firstName + lastName + email)}</h1>;
  }

  function App3() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
  export const App3a = (names) =>  {
    return(
    <div>
        <WelcomePerson props={(names)}/>
    </div>);
  }

  export default App3;
  