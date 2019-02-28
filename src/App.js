import React, { Component } from 'react';
import './App.css';

import Button from './components/button';
import NewsItem from './components/newsitem';

let padd50 = {
  padding:'50px',
}

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="container" style={padd50}>
            <Button />
            <NewsItem />
          </div>
        </div>
    );
  }
}

export default App;
