import React from "react";
import { createRoot } from 'react-dom/client';
import "./App.css";
import ReactDOM from 'react-dom';
import App from "./App.jsx";


const root = ReactDOM.createRoot(
  document.getElementById('app')
);
root.render(<App/>)