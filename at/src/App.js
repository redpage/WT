import React from 'react';
import './App.css';
import { WTContext } from './lib/WT';
import {Home} from './page/home.js';

class App extends React.Component {
  static contextType = WTContext;

  constructor(props) {
    super(props);
  }

  render() {
    let WT = this.context;
    WT.Mbrno = 3;
    return(
      <Home x="2"></Home>
    );
  }
}

export default App;
