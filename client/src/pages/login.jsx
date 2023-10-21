import { Link } from 'react-router-dom'
import './login.scss'

const login = () => {
    return (
        <div className='center'>
            <div className='login'>
                <div className='left'>
                    <h1>Ready to trade something old,
                        for something new!</h1>
                    <form>
                        <input className="login-input" type="text" placeholder="Username"></input>
                        <input className="login-input" type="password" placeholder="Password"></input>
                    </form>
                    <span>
                    </span>
                    <button>Login</button>
                    <p>Want to create an account. Sign up here! </p>

                    <Link to={"/register"}>
                        <button>Create Your Account</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default login