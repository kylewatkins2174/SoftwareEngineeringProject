import { Link } from 'react-router-dom';
import './homePage.scss'

const homePage = () =>{
    return(
        <div className='bodyContainerHome'>
            <div className='menuContainerHome'>
                <Link className="thingsTitleHome" to="/home">Things</Link>
                <div className="menuItemRowHome">
                    <span className="menuItemHome" to="/user">Account</span>
                    <Link className="menuItemHome" to="/tradecenter">Trade</Link>
                    <Link className="menuItemHome" to="/user">Account</Link>
                </div>
            </div>
        </div>
    )
}

export default homePage