import "./App.css";
import Toggleswitch from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";
import { Home } from "./component/home";
import Profile from "./component/profile";
import { Fetchapi } from "./component/fetchapi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | &nbsp;
          <Link to="/todo">Todo</Link> | &nbsp;
          <Link to="/switch">switch</Link> | &nbsp;
          <Link to="/profile">Profile</Link> | &nbsp;
          <Link to="/apilogic">API Fetch</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/switch" element={<Toggleswitch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/apilogic" element={<Fetchapi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
