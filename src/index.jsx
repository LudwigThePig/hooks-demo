import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './AppClass';
import * as serviceWorker from './serviceWorker';

function SuperSecretWrapper() {
  const [componentType, setComponentType] = useState('Class');
  return (
    <div>
      <div className="header">
        <h1>{componentType}</h1>
        <button
          onClick={() => setComponentType(componentType === 'Class' ? 'Hook' : 'Class')}
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
