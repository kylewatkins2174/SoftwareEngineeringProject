import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { AuthContext } from "./contexts/authContext.js";
import Register from './pages/register';
import User from "./pages/userPage"
import TradeCenter from "./pages/tradeCenter.jsx"
import Homepage from "./pages/homePage"
import Login from "./pages/login"
import InsertItem from "./pages/InsertItem.jsx"


function App() {
  const {userValues, getUser} = useContext(AuthContext)
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    const init = async() => {
      await getUser().then(setRefresh(false))
    }

    init()
  },[])

  const ProtectedRoute = ({children}) => {
    if(userValues === undefined){
      if(refresh){
        return
      }
      console.log("sending to /login")
      return(<Navigate to="/login"/>)
    }
    return children;
  }

  const ForwardRoute = ({children}) => {
    if(userValues !== undefined){
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
          <Homepage/>
        </ProtectedRoute>
      )
    },
    {
      path:"/user",
      element:(
        <ProtectedRoute>
          <User/>
        </ProtectedRoute>
      )
    },
    {
      path:"/tradecenter",
      element:(
        //<ProtectedRoute>
          <TradeCenter/>
        //</ProtectedRoute>
      )
    },
    {
      path:"/insertitem",
      element:(
        //<ProtectedRoute>
          <InsertItem/>
        //</ProtectedRoute>
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
