import React, { useState, useEffect } from 'react';
import './App.css';

function HooksComponent() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `${count} clicks!`
  })

  return (
    <div className="main">
      <button 
        type="button"
        onClick={() => setCount(count + 1)}
      >
        {`${count} clicks`}
      </button>
    </div>
  );
}

export default HooksComponent;