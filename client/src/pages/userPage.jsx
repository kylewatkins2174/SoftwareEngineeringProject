import { Link } from 'react-router-dom';
import './userPage.scss'
import './register.jsx';

function User () {
   
    return(  

        <div className='body-container'>
            <Link className="things-title" to="/home">Things</Link>
            <input type="file" id="submitAvatar" accept="image/jpg, image/png" className='avatar'></input>
            <div id="avatarDisplay"></div>
            <div className='info-container'>
                <h1>Your Account</h1>
                <form>
                <input className="userName" placeholder="Username"></input><br/>
                <input className="email" placeholder="email"></input><br/>
                <input className="lastName" type="text" placeholder="First Name"></input><br/>
                <input className="firstName" type="text" placeholder="Last Name"></input><br/><br/>
                <button className="infoButton" type="submit">Update</button>
                </form>
            </div>
        </div>
        
    )   
}
export default User