import React from 'react';
import './App.css';


class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

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

export default ClassComponent;
