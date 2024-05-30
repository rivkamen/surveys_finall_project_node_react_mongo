import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './app/store';
import "primereact/resources/themes/lara-light-teal/theme.css"
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import { BrowserRouter } from 'react-router-dom';

/*



********************************************************
********************************************************primereact/resources/themes/lara-dark-teal/theme.css
********************************************************primereact/resources/themes/lara-dark-blue/theme.css
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
