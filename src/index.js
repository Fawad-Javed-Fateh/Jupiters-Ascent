import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(/*This function is responsible for injecting react JSX in the root component of the index.html file */
  /**
   AUTHOR NAME: Umer Ahmed
      DATE OF GENERATION: 15/5/2022
      DATE OF LAST REVISION: 15/5/2022
      VERSION: 1.0
   */
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
