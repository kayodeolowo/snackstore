import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import reducer from './context/reducer';
import { initialState } from './context/initialState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer} >
             <App />
        </StateProvider>    
     </React.StrictMode>
  </Router>
  
);

