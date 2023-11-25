import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import requestServer from "../axios"
import {AuthContext} from "../contexts/authContext.js"
import './userPage.scss';


function User () {
  const {userValues} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
      "firstname" : "",
      "lastname" : "",
      "email" : ""
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
      setInputs((prev) => {
          return{...prev, [e.target.name] : e.target.value}
      })
  }

  const handleUpdate = (e) =>{
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
        <div className='infoContainerUser'>
          <h1 className='yourAccountUser'>Your Account</h1>
          <form>
          <p className="userDataUser">{userValues.username}</p><br/>
          <input onChange={handleChange} name="email" className="inputUser" type="text" placeholder={userValues.email}></input><br/>
          <input onChange={handleChange} name="firstname" className="inputUser" type="text" placeholder={userValues.firstname}></input><br/>
          <input onChange={handleChange} name="lastname" className="inputUser" type="text" placeholder={userValues.lastname}></input><br/><br/>
          <button onChange={handleUpdate} className="infoButtonUser" type="submit">Update</button>
          </form>
        </div>
    </div>
)
}
export default User;