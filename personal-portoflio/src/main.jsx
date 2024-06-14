import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Content from './components/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path:"AboutMe",
    element: <About/>
  },{
    path:"Projects",
    element: <Project/>
  },{
    path:"Contact",
    element:<Content/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
