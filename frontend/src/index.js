import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import url from './Routes/Login/urlSlice';
import ClassRoomNumber from './Routes/SetSeat/ClassRoomNumber/classRoomNumberSlice';
import rowsSlice from './Routes/SetSeat/ClassRoomRows/rowsSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({reducer:
  {url:url,
  roomNumber:ClassRoomNumber,
  rows:rowsSlice
  }


})
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
