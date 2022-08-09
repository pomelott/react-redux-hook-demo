import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
// import App from './components';
import App from './components/App';
import "./extract.less"
import store from './newStore';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="nav-box flex justify-center">
          <NavLink activeClassName='active-nav' className="nav-item" to="/">index</NavLink>
          <NavLink activeClassName='active-nav' className="nav-item" to="/person">person</NavLink>
        </div>
        <Switch>
          <Route  exact path="/">
            <h2 className="text-center text-blue-500 text-4xl mt-5">index route content</h2>
            <App></App>
          </Route>
          <Route path="/person">
          <h2 className="text-center text-blue-500 text-4xl mt-5">person route content</h2>
          </Route>
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
