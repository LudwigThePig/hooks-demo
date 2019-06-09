import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';
import * as serviceWorker from './serviceWorker';


function SuperSecretWrapper() {
  const [componentType, setComponentType] = useState('Class');
  return (
    <div>
      <div className="header flex">
        <h1>{componentType}</h1>
        <button
          className="light-btn"
          onClick={() => setComponentType(componentType === 'Class' ? 'Hooks' : 'Class')}
          type="button"
        >
      Switch it up
        </button>
      </div>
      <ClassComponent />
    </div>
  );
}

ReactDOM.render(<SuperSecretWrapper />, document.getElementById('root'));

serviceWorker.unregister();
