import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';
import HooksComponent from './practiceComponents/HooksComponent';
import CustomHook from './practiceComponents/FetchHook';
import * as serviceWorker from './serviceWorker';


function SuperSecretWrapper() {
  const [componentType, setComponentType] = useState('Classes');
  const spanStyle = {
    color: '#ccc'
  }
  return (
    <div id="main">
      <div className="flex header">
        <h1><span style={spanStyle}>Reacting with</span></h1>
        <select onChange={(e) => setComponentType(e.target.value)}>
          <option value="Classes">Classes</option>
          <option value="Hooks">Hooks</option>
          <option value="Custom Hooks">Custom Hooks</option>
        </select>
      </div>
      {componentType === 'Classes'
        ? <ClassComponent /> : null }

      {componentType === 'Hooks'
      ? <HooksComponent /> : null }

      {componentType === 'Custom Hooks'
        ? <CustomHook /> : null }
    </div>
  );
}

ReactDOM.render(<SuperSecretWrapper />, document.getElementById('root'));

serviceWorker.unregister();
