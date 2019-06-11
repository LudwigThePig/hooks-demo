import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';
import HooksComponent from './Practice';
import CustomHook from './CustomHook';
import * as serviceWorker from './serviceWorker';


function SuperSecretWrapper() {
  const [componentType, setComponentType] = useState('Classes');
  const spanStyle = {
    color: '#ccc'
  }
  return (
    <div>
      <div className="header flex">
        <h1><span style={spanStyle}>Reacting with</span> {componentType}</h1>
        <button
          className="light-btn"
          onClick={() => setComponentType(componentType === 'Classes' ? 'Hooks' : 'Classes')}
          type="button"
        >
      Switch it up
        </button>
      </div>
      {componentType === 'Classes'
        ? <ClassComponent />
        : <HooksComponent />
      }
      <CustomHook />
    </div>
  );
}

ReactDOM.render(<SuperSecretWrapper />, document.getElementById('root'));

serviceWorker.unregister();
