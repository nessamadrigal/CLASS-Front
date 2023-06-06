import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import NewsFeed from './components/news-feed'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <NewsFeed />,
  document.getElementById('root')
);

// If you want to your app to work offline and load faster, you can change
// unregister() to register() below. Note thise comes with some pitfalls.
// Learn more about service workers:
https://bit.ly/CRA-PWA
serviceWorker.unregister();
