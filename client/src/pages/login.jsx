import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from "react"
import { AuthContext } from '../contexts/authContext.js'
import './login.scss'

const Login = () => {
    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        "username" : "",
        "password" : ""
    })
    const [err,setErr] = useState(null)

    const handleChange = (e) => {
        setInputs((prev) => {
            return{...prev, [e.target.name] : e.target.value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(JSON.stringify(inputs))

        try{
            await login(inputs).then(
                navigate("/home")
            )
        }catch(err){
            setErr(err.response.data)
        }
    }

    return (
        <div className='center'>
            <div className='login'>
                <div className='left'>
                    <h1>Ready to trade something old,
                        for something new!</h1>
                    <form>
                        <input onChange={handleChange} name="username" className="login-input" type="text" placeholder="Username"></input>
                        <input onChange={handleChange} name="password" className="login-input" type="password" placeholder="Password"></input>
                    </form>
                    <span>
                    </span>
                    <button onClick={handleSubmit}>Login</button>
                    <p>{err && err}</p>
                    <p>Want to create an account. Sign up here! </p>

                    <Link to={"/register"}>
                        <button>Create Your Account</button>
                    </Link>
    
                </div>

            </div>
        </div>
    )
}

export default Login