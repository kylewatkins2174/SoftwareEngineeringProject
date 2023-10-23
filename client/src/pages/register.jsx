import "./register.scss"
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import requestServer from "../axios"


const Register = () => {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        "firstname" : "",
        "lastname" : "",
        "email" : "",
        "username" : "",
        "password" : ""
    })

    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setInputs((prev) => {
            return{...prev, [e.target.name] : e.target.value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(JSON.stringify(inputs))

        requestServer.post("/auth/register", inputs).then(response => {
            console.log(response)
            navigate("/login")
        }).catch(err => {
            setErr(err)
        })
    }


    return (
        <div className='mid'>
            <div className='register'>
                <div className='center'>
                    <h1>Welcome to Things</h1>

                    <span>Ready to Trade, just type in your email, create a username and password</span>

                    <form>
                        <input onChange={handleChange} name="firstname" className="login-input" type="text" placeholder="First Name"></input>
                        <input onChange={handleChange} name="lastname" className="login-input" type="text" placeholder="Last Name"></input>
                        <input onChange={handleChange} name="email" className="login-input" type="text" placeholder="Email"></input>
                        <input onChange={handleChange} name="username" className="login-input" type="text" placeholder="Username"></input>
                        <input onChange={handleChange} name="password" className="login-input" type="password" placeholder="Password"></input>
                    </form>

                    <button onClick={handleSubmit}>Register</button>

                    {err && err}

                    <span>Do you already have an account? Login here</span>

                    <Link to={"/login"}>
                        <button>Login</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default Register