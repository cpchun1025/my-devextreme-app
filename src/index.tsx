// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'devextreme/dist/css/dx.light.css'; // Import DevExtreme theme

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);