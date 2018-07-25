import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import './index.css';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
}

registerServiceWorker();
