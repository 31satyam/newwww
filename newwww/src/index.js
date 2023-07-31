import React from 'react';
import ReactDOM from 'react-dom/client';
// import CounterComp from './component/CounterComp';
// import Likedislike from './component/Likedislike';
import NewRoute from './component/NewRoute';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Newproduct from './component/Newproduct';



//import FirstComponent,{ Demo } from './component/FirstComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewRoute/>
    {/* <CounterComp/> */}
    {/* <Likedislike count='99' count1='2'/> */}
    {/* <Newproduct/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
