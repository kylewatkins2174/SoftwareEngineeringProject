import { createContext, useState } from "react";
import requestServer from "../axios";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [userValues, setUserValues] = useState()

    const login = async (inputs) => {
        const res = await requestServer.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials: true
        })

        setUserValues(res.data)
    }

    const logout = async () => {
        console.log("attempt logout")
        setUserValues(undefined)
        requestServer.post("http://localhost:8800/api/auth/logout")
    }

    const getUser = async() => {
        try {
            const res = await requestServer.post("http://localhost:8800/api/auth/userInfo");
            const user = {
            "firstname": res.data.firstname,
            "lastname": res.data.lastname,
            "username": res.data.username,
            };
            setUserValues(user);
            console.log("User data retrieved:", JSON.stringify(user));
        } catch (error) {
            console.error("Error while fetching user data:", error);
            console.log("User not found");
        }
    }

    return(
        <AuthContext.Provider value={{userValues, getUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}