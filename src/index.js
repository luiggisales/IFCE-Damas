import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tabuleiro from './dama/Tabuleiro';
import reportWebVitals from './reportWebVitals';
import { newTabuleiro } from './dama/NovoTabuleiro/NovaTabela';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tabuleiro/>
  </React.StrictMode>
);

reportWebVitals();