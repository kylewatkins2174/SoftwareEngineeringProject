import { Link } from "react-router-dom"
import "./navbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from "../contexts/authContext"
import { useContext } from "react"

export const Navbar = () => {
    const {userValues} = useContext(AuthContext)

    return(
        <div className="navbar-container">
            <div className="profile-container">
                <PersonIcon className="person-icon"/>
                <h4>{userValues.username}</h4>
                <h5>{userValues.firstname} {userValues.lastname}</h5>

            </div>
            <div className="navigation-container">
                <span ><Link className="navbar-link" to={"/home"}>Home</Link></span>
                <p>|</p>
                <span><Link className="navbar-link" to={"/tradecenter"}>Trade Center</Link></span>
                <p>|</p>
                <span><Link className="navbar-link" to={"/user"}>User Page</Link></span>
            </div>
        </div>
    )
}

export default Navbar