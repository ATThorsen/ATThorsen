import React, { useState, useEffect } from 'react';

function App3() {
  return(
    <div className="App">
      <h1>Opgave 1</h1>

    <Opgave1 startNumber={5}
     changeNumber={2}
     />
     <br/>
      <Opgave2/>
      <br/>
      <Opgave3/>
    </div>  
      )

  }
  // Similar to componentDidMount and componentDidUpdate:
   
    function Opgave1(props){
        const [count, setCount] = useState(Number(props.startNumber));
        const changeNumber = Number(props.changeNumber);

        function up(){
        setCount(count + changeNumber)
    }
        function down(){
            setCount(count - changeNumber)
        }

        return(
        <p>Number is at {count}
        <button onClick={up}> Count go up </button> 
        <button onClick={down}> count go down </button> 
        </p>
        )
    }



    function Opgave2() {
        const[time, setTime]=useState();
      
        useEffect(()=>{
          setInterval(() => {setTime(new Date().toLocaleTimeString())}, 1000);
        });
      
        return(<>
          <p>Kolkken er:   {time}</p>
        </>);
      }


      
function Opgave3(){
    const[joke, setJoke] = useState('Chuck Norris Joke will be here!');
    
    const getChuckNorris = () => {
      fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {console.log(data.value);setJoke(data.value)});
    }
  
    return (<>
      <p>Get your Chuck Norris Joke here!</p>
      <button onClick={getChuckNorris}>Get Joke</button><br/><br/>
      <i>{joke}</i><br/><br/><br/>

    </>);
  }


export default App3;