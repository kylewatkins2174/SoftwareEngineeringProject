import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './userPage.scss';
import requestServer from "../axios"

function User () {
    
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
      /*  const [getThings, setThings] = useState([]);
        useEffect(()=>{
            const getThings= async ()=>{
                const res = fetch('');
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
                <p className="userDataUser">Your Username</p><br/>
                <input onChange={handleChange} /*name="email"*/ className="inputUser" /*key={email.userId}*/ type="text" placeholder="email"/*{email.name}*/></input><br/>
                <input onChange={handleChange} /*name="firstname"*/ className="inputUser" /*key={firstname.userId}*/ type="text" placeholder="First Name"/*{firstname.name}*/></input><br/>
                <input onChange={handleChange} /*name="lastname"*/ className="inputUser" /*key={lastname.userId}*/ type="text" placeholder="Last Name"/*{lastname.name}*/></input><br/><br/>
                <button onChange={handleUpdate} className="infoButtonUser" type="submit">Update</button>
                </form>
            </div>
        </div>
        
    )   
}
export default User