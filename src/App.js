import './App.css';
import React from 'react';
import { Counterchild } from './component/counterchild';
import { Liftupcomponent } from './component/Liftupcomponent';
import Toggleswitch from './projects/ToggleSwitch/ToggleSwitch';
import { Todo } from './projects/Todo/Todo';
import Holdcounter from './projects/HoldCounter/Holdcounter';

function App() {
  console.log("App Rendered");
  var [count, setCount] = React.useState(0);
  var [counter, setCounter] = React.useState(1);
  let handleButtonclick = () => {
    setCount(count + counter);
  };
  let handleButtonclickDec = () => {
    if (count > 0) {
      setCount(count - counter);
    }
  }
  let handleButtonReset = () => {
    setCount(0)
    setCounter(1);
  }

  let handleChangeCounter = (event) => {
    setCounter(Number(event.target.value));
    setCount(0)
  }

  return (
    <div className="App">
      {/* <Todo></Todo>
      <Toggleswitch />
      <p>Increment button will disabled if value grater then 100 </p>
      <p>Decrement button will disabled if value less than 100 </p>
      <h1>{count}</h1>
      <input type='text' placeholder='enter couonter' onChange={handleChangeCounter} value={counter} />
      <button onClick={handleButtonclick} disabled={count >= 100}> increment</button>
      <button onClick={handleButtonclickDec} disabled={count <= 0} >Decrement</button>
      <button onClick={handleButtonReset}>Reset</button>
      <Counterchild count={count} />
      <Liftupcomponent></Liftupcomponent> */}
      <Holdcounter />
    </div>
  );
}

export default App;
