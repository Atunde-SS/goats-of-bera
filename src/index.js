import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import your global CSS if any.
import GoatsOfBeraWebsite from './App'; // Ensure correct path to App.js

ReactDOM.render(
  <React.StrictMode>
    <GoatsOfBeraWebsite />
  </React.StrictMode>,
  document.getElementById('root')
);