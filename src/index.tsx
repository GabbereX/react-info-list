import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.local.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './components/common/simple/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullItem from './components/common/simple/FullItem/FullItem';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/item/:id' element={<FullItem />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
