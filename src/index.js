import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "./polyfills";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context';
import './index.css';
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
