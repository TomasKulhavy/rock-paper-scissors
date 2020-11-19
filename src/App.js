import './App.css';

function App() {
  function newComputerPick() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = choice[Math.floor((Math.random() * 3))];
    setComputerPick(randomChoice);
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;