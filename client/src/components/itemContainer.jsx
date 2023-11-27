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
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserBooks", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
            }
            else if(props.class === "cd"){
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserCDs", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
            }
            else if(props.class === "movie"){
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserMovies", {"userid":userValues.userid})
                setItems(res.data)
                console.log(items)
                setLoading(false)
            }
            else if (props.class === "vinyl"){
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserVinyls", {"userid":userValues.userid})
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

    const ItemDetails = (item) => {
        switch (props.class) {
            case "book":
                return (
                    <div>
                        <p>Author: {item.author}</p>
                    </div>
                );
            case "cd":
                return (
                    <div>
                        <p>Artist: {item.artist}</p>
                    </div>
                );
            case "movie":
                return (
                    <div>
                        <p>Director: {item.director}</p>
                    </div>
                );
            case "vinyl":
                return (
                    <div>
                        <p>Artist: {item.artist}</p>
                    </div>
                );
            default:
                return null;
        }
    };

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
                        {ItemDetails(item)}
                        <p>Description: {item.descr}</p>
                    </div>
                ))}
            </div>

        )
    }


}

export default ItemContainer