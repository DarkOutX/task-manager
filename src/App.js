import React from 'react';
import './App.css';
import Board from './components/Board.js';
import BoardAdder from './components/Board.js';

class App extends React.Component {
  state = {
    boards: [
      {
        name: "My board",
        id: 1,
      },
      {
        name: "My Another board",
        id: 2,
      },
    ],
  };

  render() {
    return <div className="App">
            App
           </div>
  };
}

export default App;
