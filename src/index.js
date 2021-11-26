import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './Components/Pages/Layouts/UI/Header/Header.jsx';
import {Register} from './Components/Pages/Layouts/UI/Register/Register.jsx';

ReactDOM.render(
  <React.StrictMode>
  <Header/>
  <Register/>
  
  </React.StrictMode>,
  document.getElementById('root')
);
