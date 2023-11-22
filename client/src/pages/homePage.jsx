import './homePage.scss'
import { Link } from "react-router-dom"
import ItemContainer from "../components/itemContainer.jsx"



const homePage = () =>{
    
    return(
        <div>
            <div className='home-container'>
                <ItemContainer class="book"/>

                <ItemContainer class="cd"/>

                <ItemContainer class="movie"/>

                <ItemContainer class="vinyl"/>
            </div>
            <div>
                <Link to={"/insertItem"}><p>Add Items</p></Link>
            </div>
        </div>

    )
}

export default homePage