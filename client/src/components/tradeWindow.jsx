import { useContext } from "react"
import { AuthContext } from '../contexts/authContext.js'
import "./tradeWindow.scss"
import ItemDropdown from "./inventoryDropdown.jsx"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const TradeWindow = (props) => {
    const {itemToTrade, isVisible, updateVisibility} = props
    const {userValues} = useContext(AuthContext)

    const handleExit = () => {
        updateVisibility()
    }

    if(isVisible){
        
        return(
            <div className="overlay-container">

                <div className="user-section">
                    <h1>{userValues.username}</h1>
                    <p>Select item from your<br/>inventory to trade: </p>
                    <br/>
                    <ItemDropdown itemType={itemToTrade.item.itemtype}/>
                </div>

                <div className="center-section">
                    <div className="arrow-container">
                        <ArrowBackIcon/>
                        <ArrowForwardIcon/>
                    </div>
                    <div className="submit-container">
                        <p>submit</p>
                    </div>
                </div>


                <div className="owner-section">
                    <button className="exit-button" onClick={handleExit}><CloseIcon/></button>
                    <h1>{itemToTrade.item.username}</h1>
                    <h1>{itemToTrade.item.title}</h1>
                    <p>{itemToTrade.item.descr}</p>
                </div>




            </div>
        )
    }
    else{
        return(
            <div>
    
            </div>
        )
    }


}

export default TradeWindow;