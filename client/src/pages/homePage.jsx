import { Link } from 'react-router-dom';
import './homePage.scss'
import ItemContainer from "../components/itemContainer.jsx"



const homePage = () =>{



    return(
        <div className='home-container'>
            <ItemContainer class="book"/>

            <ItemContainer class="cd"/>

            <ItemContainer class="movie"/>

            <ItemContainer class="vinyl"/>
        </div>
    )
}

export default homePage