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
import { CookiesProvider } from "react-cookie";
import {QueryClientProvider , QueryClient} from 'react-query'
// import 'bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </QueryClientProvider>
      </Router>
    </PersistGate>

  </Provider>



); 