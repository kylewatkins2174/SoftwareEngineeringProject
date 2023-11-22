import {useContext} from 'react';
import {AuthContext} from "../contexts/authContext.js"
import { Link } from "react-router-dom"
import "./navbar.scss"

export const Navbar = () => {

    return(
        <div>
            <div className="navbar-container">
                <Link className="thingsTitleNav" to="/home">Things</Link>
                <div className="navbar-link">
                    <Link className="textNav" to={"/home"}>Home</Link>
                    <Link className="textNav" to={"/tradecenter"}>Trade</Link>
                    <Link className="textNav" to={"/user"}>User</Link>              
                </div>
            </div>

            <div className="color-bar">
            </div>
        </div>

    )
}

export default Navbar