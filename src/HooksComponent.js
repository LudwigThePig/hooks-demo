import React, { useState, useEffect } from 'react';

function HooksComponent() {

  const [count, setCount] = useState(0);

  useEffect(() => {document.title = `${count} hooks!`})

  return (
    <div className="main">
      <button 
        type="button"
        onClick={() => {setCount(count + 1 )}}
      >
        {`${count} clicks`}
      </button>
    </div>
  );
}

export default HooksComponent;
