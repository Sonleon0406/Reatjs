import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBoard, {dashBoardLoader} from './pages/Dashboard'
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/main";



const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard/>,
    loader: dashBoardLoader,
    errorElement: <Error />
  },
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error />
  },
]);

function App() {
  return (
    <div className='App'>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
