import './userPage.scss'

const User = () => {
    
    return(  

        <div className='body-container'>
            <div className='info-container'>
                <input type="file" className='avatar' id="uploader"></input>
                <p className="userName">myUsername</p>
                <p className="email">myEmail@shsu.edu</p>
                <input className="lastName" type="text" placeholder="First Name"></input>
                <input className="firstName" type="text" placeholder="First Name"></input> 
                <button id="saveButtonScript" className="saveButton">Save</button>
            </div>
        </div>
        
    )
    
}
export default User