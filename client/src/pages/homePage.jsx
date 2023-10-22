import { Link } from 'react-router-dom';
import './homePage.scss'

const homePage = () =>{
    return(
        <div className='body-container'>
            <div className='menu-container'>
                <Link className="things-titleHome" to="/home">Things</Link>
                <div className="menuItemRow">
                    <span className="menuItem">Inventory</span>
                    <span className="menuItem">Marketplace</span>
                    <Link className="menuItem" to="/user">Account</Link>
                </div>
            </div>
        </div>
    )
}

export default homePage