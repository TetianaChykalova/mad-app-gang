import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as axios from "axios";

// let apiData = axios.get('https://api.spacexdata.com/v4/dragons')
//     .then(data => {
//         console.log(data);
//         apiData = data;
//     });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

