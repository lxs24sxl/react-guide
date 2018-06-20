// eslint-disable-next-line
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// setInterval(() => {

// function Clock( props ) {
//   return (
//     <div>
//       <h1>Hello world </h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// function tick() {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
// ReactDOM.render(<App />, document.getElementById('root'));
  
// }, 1000);
registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
