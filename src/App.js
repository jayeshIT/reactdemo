import "./App.css";
import Toggleswitch from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";
import { Home } from "./component/home";
import Profile from "./component/profile";
import { Fetchapi } from "./component/fetchapi";
import Refexample from './component/Refexample';
import { Useidexample } from "./component/useid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BioProvider } from "./component/ContextAPI/index";
import { Usereducercomp } from "./component/useReducer";
import { Reactmemo } from "./component/Memo/Reactmemo";
import { Parallax } from "./component/Parallax";
function App() {

  return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | &nbsp;
          <Link to="/todo">Todo</Link> | &nbsp;
          <Link to="/switch">switch</Link> | &nbsp;
          <Link to="/profile">Profile</Link> | &nbsp;
          <Link to="/apilogic">API Fetch</Link> | &nbsp;
          <Link to="/useref">Use Ref</Link> | &nbsp;
          <Link to="/useid">Use Id</Link> | &nbsp;
          <Link to="/reducer">Reducer</Link> | &nbsp;
          <Link to="/memo">Memo</Link> | &nbsp;
          <Link to="/parallax">Parallax</Link>
        </nav>
        <BioProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/switch" element={<Toggleswitch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/apilogic" element={<Fetchapi />} />
          <Route path="/useref" element={<Refexample />} />
          <Route path="/useid" element={<Useidexample />} />
          <Route path="/reducer" element={<Usereducercomp />} />
          <Route path="/memo" element={<Reactmemo />} />
          <Route path="/parallax" element={<Parallax />} />
        </Routes>
        </BioProvider>
      </BrowserRouter>
  );
}

export default App;
