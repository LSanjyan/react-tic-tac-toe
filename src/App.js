import logo from './logo.svg';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import './App.css';


function App() {
  return (
   <div>
    <Header />
    <Player wichPlayer='x' />
    <Player wichPlayer='o' />
    <Board />
     </div>
  );
}

export default App;
