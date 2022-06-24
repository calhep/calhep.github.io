import React from 'react'
import './App.css';

import { useRoutes} from "react-router-dom"

import Main from './components/main'
import Footer from './components/footer'
// import ErrorPage from './components/errorpage';
import About from './components/about';
import Projects from './components/projects';

function App() {

  let element = useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <About /> },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <Projects /> },
      ]
    },
    // { path: '*', element: <ErrorPage /> }
  ]);


  return (
    <div className="App">
      {element}
      <Footer />
    </div>
  );
}

export default App;