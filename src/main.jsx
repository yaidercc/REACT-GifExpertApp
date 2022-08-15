import React from 'react';
import ReactDOM from 'react-dom/client';
import {GifExpertApp} from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * El modo estricto de react basicamente eyuda a identificar variedades de problemas en los componentes.
   * Mas sobre el modo estricto aqui: https://reactjs.org/docs/strict-mode.html
   */
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
