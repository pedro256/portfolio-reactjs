import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { GlobalContextProvider } from './Context/global.context';


ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App/>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
