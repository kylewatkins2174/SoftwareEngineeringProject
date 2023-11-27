import { useContext, useEffect, useState } from "react"
import requestServer from "../axios"
import { AuthContext } from "../contexts/authContext"


const ItemDropdown = (props) => {
    const {itemType} = props
    const {userValues} = useContext(AuthContext)
    const [items, setItems] = useState()
    const [loading, setLoading] = useState(true)


    const getInventory = async() => {
        console.log(itemType)
        try{
            if(itemType === "book"){
                console.log("before book req")
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserBooks", {userid:userValues.userid})
                setItems(res.data)
                setLoading(false)
            }
            else if(itemType === "movie"){
                console.log("movie req")
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserMovies", {userid: userValues.userid})
                setItems(res.data)
                setLoading(false)
              }
            else if(itemType === "vinyl"){
                console.log("vinyl req")
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserVinyls", {userid: userValues.userid})
                setItems(res.data)
                setLoading(false)
            }
            else if(itemType === "cd"){
                console.log("cd req")
                const res = await requestServer.post("http://localhost:8800/api/inventory/getUserCDs", {userid: userValues.userid})
                setItems(res.data)
                setLoading(false)
            }
        }catch(error){
            console.log("error in InventoryDropdown.getInventory: " + error)
        }
    }

    const handleChange = (e) => {
        props.onChange(e)
    }

    useEffect(() => {
        getInventory()
    }, [])


    
    if(loading){
        console.log("loading...")

        return <p>loading</p>
    }
    else{
        console.log("not loading")
        return(
            <div>
                <select name="user-item" onChange={handleChange}>
                    {items.map((items) => (
                        <option key={items.userid} value={items.userid}>{items.title}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default ItemDropdown