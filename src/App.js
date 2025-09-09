import "./App.css";
import { Todo } from "./projects/Todo/Todo";
import { Home } from "./component/home";
import Profile from "./component/profile";
import { Fetchapi } from "./component/fetchapi";
import Refexample from './component/Refexample';
import { Useidexample } from "./component/useid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BioProvider } from "./component/ContextAPI/index";
import { Usereducercomp } from "./component/useReducer";
import { Reactmemo } from "./component/Memo/Reactmemo";
import { Parallax } from "./component/Parallax";
import { Usememo } from "./component/Memo/Usememo";
import { AppLayout } from "./component/Applayout";
import { Report } from "./component/Report";
import { Movies } from "./component/Movies";
import { ContactUs, contactData } from "./component/ContactUs";
import { Posts } from "./component/CRUD/Posts";
import { Parent } from "./component/UI/Parent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/apilogic",
      element: <Fetchapi />,
    },
    {
      path: "/useref",
      element: <Refexample />,
    },
    {
      path: "/useid",
      element: <Useidexample />,
    },
    {
      path: "/reducer",
      element: <Usereducercomp />,
    },
    {
      path: "/memo",
      element: <Reactmemo />,
    },
    {
      path: "/parallax",
      element: <Parallax />,
    },
    {
      path: "/Usememo",
      element: <Usememo />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
      action: contactData
    }, {
      path: "/posts",
      element: <Posts />,
    }, {
      path: "/ui/list",
      element: <Parent />,
    }
    ]
  }, {
    path: 'report',
    element: <Report />
  }
]);

function App() {
  return (
    <BioProvider>
      <RouterProvider router={router} />
    </BioProvider>
  );
}
export default App;
