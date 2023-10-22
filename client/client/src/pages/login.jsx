import './login.scss'


const login = () => {
    return(
        <div className='outter-container'>
            <div className='login-container'>
                <input className="login-input" type="text" placeholder="Username"></input>
                <input className="login-input" type="text" placeholder="Password"></input>
            </div>
        </div>
    )
}

export default login