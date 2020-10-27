import './reset.css';
import './App.scss';
import Boards from './components/Boards.js';
import BoardAdder from './components/BoardAdder.js';


const App = () => (
  <div className="App">
    <BoardAdder />
    <Boards />
  </div>
)

export default App;
