import { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { AuthContext } from "./contexts/authContext.js";
import Register from './pages/register';
import User from "./pages/userPage"
import TradeCenter from "./pages/tradeCenter.jsx"
import Homepage from "./pages/homePage"
import Login from "./pages/login"
import InsertItem from "./pages/InsertItem.jsx"

function App() {
  console.log("attempting display")
  const {userValues, getUser} = useContext(AuthContext)
  console.log(JSON.stringify(userValues))

  const [refresh, setRefresh] = useState(true)

  const ProtectedRoute = ({children}) => {
    if(userValues === undefined){
      if(refresh){
        getUser()
        setRefresh(false)
      }
      return(<Navigate to="/login"/>)
    }
    console.log(JSON.stringify(userValues))
    return children;
  }

  const ForwardRoute = ({children}) => {
    console.log("user values: " + JSON.stringify(userValues))
    if(userValues !== undefined){
      return(<Navigate to="/home"/>)
    }
    if(refresh){
      getUser()
    }
    return children
  }

  const router = createBrowserRouter([
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
