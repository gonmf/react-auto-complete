import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AutoComplete from './components/AutoComplete';

ReactDOM.render(
  <React.StrictMode>
    <AutoComplete name='name' dataSrc='/myapi/v2/dummy/action.json' />
  </React.StrictMode>,
  document.getElementById('root')
);
