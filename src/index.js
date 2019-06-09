import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';
import HooksComponent from './HooksComponent';
import * as serviceWorker from './serviceWorker';


function SuperSecretWrapper() {
  const [componentType, setComponentType] = useState('Class');
  const spanStyle = {
    color: '#ccc'
  }
  return (
    <div>
      <div className="header flex">
        <h1><span style={spanStyle}>Reacting with</span> {componentType}</h1>
        <button
          className="light-btn"
          onClick={() => setComponentType(componentType === 'Class' ? 'Hooks' : 'Class')}
          type="button"
        >
      Switch it up
        </button>
      </div>
      {componentType === 'Class'
        ? <ClassComponent />
        : <HooksComponent />
      }
    </div>
  );
}

ReactDOM.render(<SuperSecretWrapper />, document.getElementById('root'));

serviceWorker.unregister();
