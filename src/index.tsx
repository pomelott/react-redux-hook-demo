import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import App from './components';
import App from './components/App';
import "./extract.less"
import store from './newStore';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="flex justify-center">
        <Link className="router-item" to="/index">index</Link>
        <Link className="router-item" to="/person">person</Link>
        </div>
        <Switch>
          <Route  exact path="/index">
            index content
            <App></App>
          </Route>
          <Route class="router-item" path="/person">person content</Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
