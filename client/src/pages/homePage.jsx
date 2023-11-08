import { Link } from 'react-router-dom';
import './homePage.scss'

const homePage = () =>{
    return(
        <div className='bodyContainerH'>
            <div className='menuContainerH'>
                <Link className="thingsTitleH" to="/home">Things</Link>
                <div className="menuItemRowH">
                    <span className="menuItemH" to="/user">Account</span>
                    <Link className="menuItemH" to="/tradecenter">Trade</Link>
                    <Link className="menuItemH" to="/user">Account</Link>
                </div>
            </div>
        </div>
    )
}

export default homePage