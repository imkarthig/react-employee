import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Main } from './pages/Main.jsx';
import { Provider } from 'react-redux';

import {store} from './store/store.jsx';
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter> 
 
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
