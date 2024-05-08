import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/ButtonComponent.css';
import './components/LinkComponent.css';
import './components/Link.css';
import './components/ListComponent.css'
import './components/GoogleLogin.css'
import './components/Avartar.css'
import './components/Header.css'
import './components/Sidebar.css'
import './components/AppleLogin.css'
import './components/TableComponent.css'
import './components/FormComponent.css'

import './page/loginPage.css'
import './page/homePage.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
