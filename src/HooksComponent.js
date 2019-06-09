import React from 'react';
import './App.css';


class HooksComponent extends React.Component {
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
      <div className="main">
        <button 
          type="button"
          onClick={this.handleClick}
        >
          {`${count} clicks`}
        </button>
      </div>
    );
  }
}

export default HooksComponent;
