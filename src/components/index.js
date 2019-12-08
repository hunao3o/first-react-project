import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

// 전체 새로고침하지 않고 변화한 DOM 만 refresh
// if(module.hot) {
//     module.hot.accept();  
// }