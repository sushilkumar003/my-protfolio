import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollReveal from 'scrollreveal'; 

const root = ReactDOM.createRoot(document.getElementById('root'));  // Make sure it targets the right container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);