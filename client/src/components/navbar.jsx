import { Link } from "react-router-dom"
import "./navbar.scss"

export const Navbar = () => {
    return(
        <div>
            <div className="navbar-container">
                <span ><Link className="navbar-link" to={"/home"}>Home</Link></span>
                
                <span><Link className="navbar-link" to={"/tradecenter"}>Trade Center</Link></span>

                <span><Link className="navbar-link" to={"/user"}>User Page</Link></span>
                    
                

            </div>

            <div className="color-bar">
            </div>
        </div>

    )
}

export default Navbar