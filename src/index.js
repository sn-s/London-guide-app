import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <HashRouter basename={process.env.PUBLIC_URL} > 
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);