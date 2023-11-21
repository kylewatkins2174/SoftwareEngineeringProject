import { useState, useContext, useEffect} from "react"
import requestServer from "../axios"
import { AuthContext } from "../contexts/authContext"
import './itemContainer.scss'



const ItemContainer = (props) => {
    const [items, setItems] = useState()
    const [loading, setLoading] = useState(true)
    const {userValues} = useContext(AuthContext)

    const getItems = async() => {

        try{
            if(props.class === "book"){
                const res = await requestServer.post("http://localhost:8800/api/trade/getUserBooks", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
            }
            else if(props.class === "cd"){
                const res = await requestServer.post("http://localhost:8800/api/trade/getUserCDs", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
            }
            else if(props.class === "movie"){
                const res = await requestServer.post("http://localhost:8800/api/trade/getUserMovies", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
            }
            else if (props.class === "vinyl"){
                const res = await requestServer.post("http://localhost:8800/api/trade/getUserVinyls", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
        
            }
        }catch(error){
            console.log("error")
            console.log(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    if(loading){
        return <p>loading</p>
    }
    else{
        return(
            <div className="item-container">
                <h2>Your {props.class}s</h2>
                <hr/>
                {items.map((item) => (
                    <div>
                        <hr/>
                        <h3>{item.title}</h3>
                        <p>Author: {item.author}</p>
                        <p>Description: {item.descr}</p>
                        <p>User: {userValues.username}</p>
                    </div>
                ))}
            </div>

        )
    }


}

export default ItemContainer