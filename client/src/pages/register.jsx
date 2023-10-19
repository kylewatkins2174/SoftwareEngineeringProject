import { Link } from 'react-router-dom';
import './register.scss'

const register = () => {
    return (
        <div className='mid'>
            <div className='register'>
                <h1>Welcome to Things</h1>
                <span>Ready to Trade, just type in your email, create a username and password</span>
                <form>
                    <input className="login-input" type="text" placeholder="Username"></input>
                    <input className="login-input" type="text" placeholder="Email"></input>
                    <input className="login-input" type="password" placeholder="Password"></input>
                    <input className="login-input" type="text" placeholder="Name"></input>
                    <button>Register</button>
                </form>
                <span>Do you already have an account? Login here</span>
                <Link to={"/login"}>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    )
}
export default register;