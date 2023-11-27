import { useContext, useState, useEffect } from 'react'
import './itemRequests.scss'
import requestServer from '../axios'
import { AuthContext } from '../contexts/authContext'

const Requests = () =>{
    const {userValues} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [option, setOption] = useState("Book")
    const [requests, setRequests] = useState([])
    const [userRequests, setUserRequests] = useState([])

    useEffect(() => {
        getRequests()
        console.log(requests)
      }, [option])

    const getRequests = async () => {
        if(option === "Book"){
            console.log("trying book")
            try{
                const res = await requestServer.post("http://localhost:8800/api/requests/getBookRequests", {userid: userValues.userid})
                console.log("res data: " + JSON.stringify(res))

                setUserRequests(res.data)
                setLoading(false)

                const res2 = await requestServer.post("http://localhost:8800/api/requests/getPendingBookRequests", { userid: userValues.userid})
                setRequests(res2.data)
            }catch(error){
                console.log(error)
            }
        }
    }

    const handleChange = (e) => {
        setOption(e.target.value)
    }

    if(loading){
        return <p>loading...</p>
    }
    else{
        return(
            <div className="bodyContainerReq">

                <select onChange={handleChange}>
                <option value="Book">Books</option>
                <option value="Movie">Movies</option>
                <option value="Vinyl">Vinyls</option>
                <option value="CD">CDs</option>
                </select>


                <div className="boxReq">
                    <h1>Accept/Decline requests</h1>

                    {requests.map((request) => (
                        <div>
                            <p>{request.username} requests {request.owneritem} for {request.useritem}</p>
                        </div>
                    ))}


                </div>
    
    
                <div className="boxReq">
                    <h1>Your requests</h1>
                    {userRequests.map((request) => (
                        <div>

                            <p>You trade {request.useritem} for {request.ownername}'s {request.owneritem}</p>
                            
                        </div>
                    ))}
    
                </div>
            </div>
        )
    }
}

export default Requests