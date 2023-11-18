import { createContext, useState, useEffect } from "react";
import requestServer from "../axios";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [userValues, setUserValues] = useState()
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        const getUser = async() => {
            try {
                const res = await requestServer.post("http://localhost:8800/api/auth/userInfo");
    
                const user = {
                "email": res.data.email,
                "userid": res.data.userid,
                "username": res.data.username,
                "firstname": res.data.firstname,
                "lastname": res.data.lastname,
                "username": res.data.username,
                };
                
                console.log("User data retrieved:", JSON.stringify(user));
                setUserValues(user)
            } catch (error) {
                console.log("User not found " + error);

                setUserValues(null)
            }
        }

        getUser()
    },[])

    const login = async (inputs) => {
        try{
            const res = await requestServer.post("http://localhost:8800/api/auth/login", inputs, {
                withCredentials: true
            })
            console.log(JSON.stringify(res.data))
            setUserValues(res.data)
        }catch(error){
            console.log(error)
        }

    }

    const logout = async () => {
        console.log("attempt logout")
        setUserValues(undefined)
        requestServer.post("http://localhost:8800/api/auth/logout")
    }

    return(
        <AuthContext.Provider value={{userValues, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}