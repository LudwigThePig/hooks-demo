import React from 'react';
import './App.css';


function App () {
  // const []

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me!</button>
        <p>{count}</p>
      </div>
  );
}
}

export default App;
