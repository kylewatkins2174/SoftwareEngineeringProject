import './App.css';
import Homepage from "./pages/homePage"
import Login from "./pages/login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from './pages/register';

function App() {

  const router = createBrowserRouter([
    {
      path:"/login",
      element: (
        <Login/>
      )
    },
    {
      path:"/register",
      element: (
        <Register/>
      )
    },
    {
      path:"/home",
      element: (
        <Homepage/>
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
