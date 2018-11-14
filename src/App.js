import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import store from "./dux/store"
import {HashRouter} from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Home />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
