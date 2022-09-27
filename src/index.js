import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.grid.css';
import './index.css';
import 'tw-elements';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>

  </Provider>



); 