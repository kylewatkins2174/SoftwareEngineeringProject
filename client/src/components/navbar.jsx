import { Link, useNavigate } from "react-router-dom"
import "./navbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from "../contexts/authContext"
import { useContext } from "react"

export const Navbar = () => {
    const {userValues} = useContext(AuthContext)
    const {logout} = useContext(AuthContext)

    return(
        <div className="navbar-container">
            <Link className="thingsTitleNav" to="/home">Things</Link>
            <div className="profile-container">
                <PersonIcon className="person-icon"/>
                <h4>{userValues.username}</h4>
                <h5>{userValues.firstname} {userValues.lastname}</h5>
                <button onClick={logout}>Logout</button>
            </div>
            <div className="navigation-container">
                <span ><Link className="navbar-link" to={"/home"}>Home</Link></span>
                <p>|</p>
                <span><Link className="navbar-link" to={"/tradecenter"}>Trade Center</Link></span>
                <p>|</p>
                <span><Link className="navbar-link" to={"/user"}>User Page</Link></span>
                <p>|</p>
                <span><Link className="navbar-link" to={"/requests"}>Requests</Link></span>
            </div>
        </div>
    )
}

export default Navbar