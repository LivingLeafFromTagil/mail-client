import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mailStore from './store/mailStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    mailConfig: new mailStore(),
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
