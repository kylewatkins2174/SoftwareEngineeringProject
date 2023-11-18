import "./register.scss"
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import requestServer from "../axios"


const Register = () => {

    const navigate = useNavigate()
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    

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
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasDigit = /\d/.test(password)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
        const isLengthValid = password.length >= 8

        return (
            hasUpperCase &&
            hasLowerCase &&
            hasDigit &&
            hasSpecialChar &&
            isLengthValid
        )
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setIsValidPassword(validatePassword(password))
        setInputs((prev) => {
            return { ...prev, password }
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
        if (!isValidPassword) {
            setErr("Invalid password format")
            return
        }
        console.log(JSON.stringify(inputs))

        try{
            requestServer.post("/auth/register", inputs).then(response => {
                console.log(response)
                navigate("/login")
            }).catch(err => {
                console.log("error on register page")
                setErr("error logging in")
            })
        }catch(error){
            console.log("error on register page2")
            setErr(err)
        }


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
                        <input onChange={handleEmailChange} name="email" className={`login-input ${isValidEmail ? "" : "invalid"}`} type="text" placeholder="Email"></input>
                        <input onChange={handleChange} name="username" className="login-input" type="text" placeholder="Username"></input>
                        <input onChange={handlePasswordChange} name="password" className={`login-input ${isValidPassword ? "" : "invalid"}`} type="password" placeholder="Password"></input>
                    </form>
                    
                    <button onClick={handleSubmit} disabled={!isValidEmail || !isValidPassword}>Register</button>
                    {isValidEmail || (
                        <div className="error">Invalid email format</div>
                    )}
                    {isValidPassword || (
                        <div className="error">
                            Password must have at least 8 characters, including
                            uppercase, lowercase, digit, and special character.
                        </div>
                    )} 
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