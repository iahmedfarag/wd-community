import CallDetails from "./pages/CallDetails"
import "./index.css"
import Calls from "./pages/Calls"
import Landing from "./pages/Landing"
import Layout from "./pages/Layout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Partners from "./pages/Partners"
function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: '/calls',
          element: <Calls />,
        },
        {
          path: '/calls/:id',
          element: <CallDetails />,
        },
        {
          path: '/partners',
          element: <Partners />,
        },
      ]
    }
  ])

  return <>
    <RouterProvider router={router} />
  </>

}

export default App
