import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Counterchild } from './component/counterchild';
import { Liftupcomponent } from './component/Liftupcomponent';
import Toggleswitch from './projects/ToggleSwitch/ToggleSwitch';
import { Todo } from './projects/Todo/Todo';
function App() {
  console.log("App Rendered");
  var [count, setCount] = React.useState(0);

  let handleButtonclick = () => {
    setCount(++count);
  };
  return (
    <div className="App">
      <Todo></Todo>
      <Toggleswitch />
      {/*<h1>{count}</h1>
      <button onClick={handleButtonclick}>Click Me!</button>
      <Counterchild count={count} />
      <Liftupcomponent></Liftupcomponent> */}
    </div>
  );
}

export default App;
