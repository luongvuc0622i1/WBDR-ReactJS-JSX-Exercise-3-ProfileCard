// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <div className="card">
      <div className="card--header"/>
      <img className="avatar" src="https://zpsocial-f55-org.zadn.vn/40172f74732a9274cb3b.jpg" alt="avatar"/>
      <div className="card--body">
        <div>
          <p className="text-header">Luong Gia</p>
          <p className="text-sub">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
);