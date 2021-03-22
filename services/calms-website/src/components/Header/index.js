import React from 'react'
import { withRouter } from 'react-router-dom';


const Header = ({ user, history }) => {
    const handleUserRemoval = (e) => {
        e.preventDefault();
        localStorage.removeItem('uid')
        history.push('/')
    }
    return (
        <div style={{ margin: '32px 0' }}>
            {!user ? <h1>Please enter your name</h1> : <h1>Hello, {user.username}!</h1>}
            {user ? <div>Not {user.username}? <button style={{ background: "none", border: "none"}} onClick={handleUserRemoval}>Click here!</button></div> : null}
        </div>
    )
}

export default withRouter(Header)
