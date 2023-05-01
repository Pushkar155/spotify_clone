import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer ,{ initialstate } from './reducer';
// import * as serviceWorker from 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialstate={initialstate} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);

