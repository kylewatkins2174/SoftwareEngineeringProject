import { Link } from 'react-router-dom';
import './userPage.scss';

function User () {
   
    return(  

        <div className='bodyContainerUser'>
            <Link className="thingsTitleUser" to="/home">Things</Link>
            <div id="avatarDisplay"></div>
            <div className='infoContainerUser'>
                <h1 className='yourAccountUser'>Your Account</h1>
                <form>
                <input className="userNameUser" placeholder="Username"></input><br/>
                <input className="emailUser" placeholder="email"></input><br/>
                <input className="lastNameUser" type="text" placeholder="First Name"></input><br/>
                <input className="firstNameUser" type="text" placeholder="Last Name"></input><br/><br/>
                <button className="infoButtonUser" type="submit">Update</button>
                </form>
            </div>
        </div>
        
    )   
}
export default User