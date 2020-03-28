import React from 'react';
import './App.css';
import { getAllByPlaceholderText } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.date} times</p>
        <button onClick={() => this.setState({ date: this.state.date })}>
          Click me
        </button>
      </div>
    );
  }
}
export default App;
