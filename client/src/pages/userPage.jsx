import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './userPage.scss';
import requestServer from "../axios"

function User () {
  const [isValidEmail, setIsValidEmail] = useState(true)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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

  const handleEmailChange = (e) => {
      const email = e.target.value;
      setIsValidEmail(emailRegex.test(e.target.value))
      setInputs((prev) => {
          return { ...prev, email }
      })
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      if (!isValidEmail) {
          setErr("Invalid email format")
          return
      }
      console.log(JSON.stringify(inputs))

      try{
          requestServer.post("/auth/user", inputs).then(response => {
              console.log(response)
              
          }).catch(err => {
              console.log("error on user page")
              setErr("Error updating information")
          })
      } catch(error) {
          setErr(err)
      }


  }

 /* const handleUpdate = (e) =>{
      e.preventDefault();
      console.log(JSON.stringify(inputs))
      requestServer.post("/auth/userPage", inputs).then(response => {
          console.log(response)
      }).catch(err => {
          setErr(err)
      })
  }*/

     /* useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await requestServer.post("http://localhost:8800/api/auth/userInfo", {"userid":1});
            if (res.ok) {
              console.log(data);
              setUser(res.data);
            } else {
              alert('Error user data not fetched');
            }
          } catch (error) {
          console.error('Error Fetching User Data:', error);
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
      const [getThings, setThings] = useState([]);
        useEffect(()=>{
            const getThings= async ()=>{
                const res = fetch('localhost:3306');
                const getdata = (await res).json();
                setThings(getdata);
                console.log(getdata);
            }
            getThings();
        },[]);*/

  return(  

    <div className='bodyContainerUser'>
        <Link className="thingsTitleUser" to="/home">Things</Link>
        <div id="avatarDisplay"></div>
        <div className='infoContainerUser'>
          <h1 className='yourAccountUser'>Your Account</h1>
          <form>
          <p className="userDataUser">{userValues.username}</p><br/>
          <input onChange={handleEmailChange} name="email" className="inputUser" type="text" placeholder={userValues.email}></input><br/>
          <input onChange={handleChange} name="firstname" className="inputUser" type="text" placeholder={userValues.firstname}></input><br/>
          <input onChange={handleChange} name="lastname" className="inputUser" type="text" placeholder={userValues.lastname}></input><br/><br/>
          <button onChange={handleSubmit} className="infoButtonUser" type="submit">Update</button>
          </form>
        </div>
        
    )   
}
export default User