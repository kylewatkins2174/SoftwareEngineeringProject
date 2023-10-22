import './userPage.scss'

const User = () => {
    
    return(  

        <div className='body-container'>
            <div className='info-container'>
                <h1>Your Account</h1>
                <input type="file" className='avatar' id="uploader"></input>
                <input className="userName" placeholder="Username"></input>
                <input className="email" placeholder="email"></input>
                <input className="lastName" type="text" placeholder="First Name"></input>
                <input className="firstName" type="text" placeholder="Last Name"></input><br/> 
                <button className="infoButton">Update</button>
            </div>
        </div>
        
    )   
}
export default User