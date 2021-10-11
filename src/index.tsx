import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppWrap } from './indexStyles';

ReactDOM.render(
  <React.StrictMode>
    <AppWrap>
      <App />
    </AppWrap>
  </React.StrictMode>,
  document.getElementById('root')
);
