import React from 'react';
import './App.css';


class ClassComponent extends React.Component {
  // TODO, handleClicks
  render() {
    const count = 0;
    return (
      <div className="main">
        <button 
          type="button"
        >
          {`${count} clicks`}
        </button>
      </div>
    );
  }
}

export default ClassComponent;
