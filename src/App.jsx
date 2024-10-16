import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => {alert("button clicked again!")}}>Click Me Again!</button>
      <button onClick={() => addToFive(3)}>Add</button>
    </>
  )
}

export default App
