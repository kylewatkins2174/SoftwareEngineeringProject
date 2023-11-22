import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { AuthContext } from "./contexts/authContext.js";
import Register from './pages/register';
import User from "./pages/userPage"
import TradeCenter from "./pages/tradeCenter.jsx"
import Homepage from "./pages/homePage"
import Login from "./pages/login"
import InsertItem from "./pages/InsertItem.jsx"
import Navbar from "./components/navbar.jsx"
import "./App.scss"


function App() {
  const {userValues, getUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(userValues !== undefined){
      setLoading(false)
    }
  }, [userValues])


  const ProtectedRoute = ({children}) => {
    if(userValues === null){
      console.log("sending to /login")
      return(<Navigate to="/login"/>)
    }
    return children;
  }

  const ForwardRoute = ({children}) => {
    if(userValues !== undefined && userValues !== null){
      console.log("sending to /home")
      return(<Navigate to="/home"/>)
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <Navigate to="/login"/>
      )
    },
    {
      path:"/login",
      element: (
        <ForwardRoute>
          <Login/>
        </ForwardRoute>
      )
    },
    {
      path:"/register",
      element:(
        <ForwardRoute>
          <Register/>
        </ForwardRoute>
      )
    },
    {
      path:"/home",
      element: (
        <ProtectedRoute>
          <Navbar/>
          <Homepage/>
        </ProtectedRoute>
      )
    },
    {
      path:"/insertitem",
      element: (
        <ProtectedRoute>
          <Navbar/>
          <InsertItem/>
        </ProtectedRoute>
      )
    },
    {
      path:"/user",
      element:(
        <ProtectedRoute>
          <Navbar/>
          <User/>
        </ProtectedRoute>
      )
    },
    {
      path:"/tradecenter",
      element:(
        <ProtectedRoute>
        <div>
          <Navbar/>
          <TradeCenter/>
        </div>
        </ProtectedRoute>
      )
    }
  ])


  if(loading){
    return <p>loading...</p>
  }
  else{
    return(
      <div className="global-container">
        <RouterProvider router = {router}/>
      </div>
    );
  }
}

export default App;
