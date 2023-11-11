import './userPage.scss';
import { useState } from "react"
import { Link } from 'react-router-dom'
import requestServer from "../axios"

function User () {

    const [inputs, setInputs] = useState({
        "email" : ""
    })

    const [err, setErr] = useState(null)

    const handleChange= (e) => {
        setInputs((prev) => {
            return{...prev, [e.target.name] : e.target.value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(JSON.stringify(inputs))

        requestServer.post("/auth/userPage", inputs).then(response => {
            console.log(response)
        }).catch(err => {
            setErr(err)
        })
    }
    return(  

        <div className='bodyContainerUser'>
            <Link className="thingsTitleUser" to="/home">Things</Link>
            <div id="avatarDisplay"></div>
            <div className='infoContainerUser'>
                <h1 className='yourAccountUser'>Your Account</h1>
                <form>
                <p className="userDataUser" placeholder="Username"></p><br/>
                <p onChange={handleChange} className="emailUser" placeholder="email"></p><br/>
                <p className="userDataUser" type="text" placeholder="First Name"></p><br/>
                <input className="userDataUser" type="text" placeholder="Last Name"></input><br/><br/>
                <button onChange={handleSubmit} className="infoButtonUser" type="submit">Update</button>
                </form>
            </div>
        </div>
        
    )   
}
export default User