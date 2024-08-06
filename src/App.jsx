import './App.css'
import Layout from "./Layout/Layout.jsx"
import Menu from "./Menu/Menu.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About/About.jsx';
import Projectss from "./Pages/Projectss/Projects.jsx"

function App() {


  const router = createBrowserRouter([
    {

      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Menu />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/project",
          element: <Projectss />,
        },
      ],
    },

  ]);
  

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App