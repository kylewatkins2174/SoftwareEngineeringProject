import { useContext, useState } from "react"
import { AuthContext } from '../contexts/authContext.js'
import "./tradeWindow.scss"
import ItemDropdown from "./inventoryDropdown.jsx"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import requestServer from "../axios.js";


export const TradeWindow = (props) => {
    const {itemToTrade, isVisible, updateVisibility, itemType} = props
    const {userValues} = useContext(AuthContext)
    const [userItem, setUserItem] = useState()



    const handleExit = () => {
        updateVisibility()
    }

    const handleChange = (e) => {
        console.log("handling change...")
        if(e.target.name === "user-item"){
            console.log("value of target: " + e.target.value)

            setUserItem(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        console.log("selecteditem: " + itemToTrade.item.title)

        const request = {
            userItemId : userItem,
            ownerItemId : itemToTrade.item.userid,
            userId: userValues.userid,
            ownerId: itemToTrade.item.userid
        }

        console.log(JSON.stringify(request))
        console.log("item type: " + itemType)

        if(itemType === "Book"){
            console.log("sending request to book")
            try{
                await requestServer.post("http://localhost:8800/api/trade/requestBook", request)
            }catch(error){
                console.log(error)
            }
        }
        if(itemType === "Movie"){
            console.log("sending request to movie")
            try{
                await requestServer.post("http://localhost:8800/api/trade/requestmovie", request)
            }catch(error){
                console.log(error)
            }
        }
        if(itemType === "Vinyl"){
            console.log("sending request to vinyl")
            try{
                await requestServer.post("http://localhost:8800/api/trade/requestvinyl", request)
            }catch(error){
                console.log(error)
            }
        }
        if(itemType === "CD"){
            console.log("sending request to  cd")
            try{
                await requestServer.post("http://localhost:8800/api/trade/requestcd", request)
            }catch(error){
                console.log(error)
            }
        }

    }

    if(isVisible){
        return(
            <div className="overlay-container">

                <div className="user-section">
                    <h1>{userValues.username}</h1>
                    <p>Select item from your<br/>inventory to trade: </p>
                    <br/>
                    <ItemDropdown itemType={itemToTrade.item.itemtype} onChange={handleChange}/>
                </div>

                <div className="center-section">
                    <div className="arrow-container">
                        <ArrowBackIcon/>
                        <ArrowForwardIcon/>
                    </div>
                    <div className="submit-container">
                        <button onClick={handleSubmit}>Submit</button>
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