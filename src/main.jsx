import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Skills from './pages/Skills/Skills.jsx';
// import AnimatedBackground from './component/AnimatedBackground/AnimatedBackground.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      },
      {
        path: '/resume',
        element: <Resume></Resume>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>




    <RouterProvider router={router} />





  </React.StrictMode>,
)
