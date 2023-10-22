import './App.css';
import Homepage from "./pages/homePage"
import Login from "./pages/login"
import User from "./pages/userPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path:"/login",
      element: (
        <Login/>
      )
    },
    {
      path:"/home",
      element: (
        <Homepage/>
      )
    },
    {
      path:"/user",
      element: (
        <User/>
      )
    }
  ])


  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
