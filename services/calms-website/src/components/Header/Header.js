import React from 'react'
import { handleUserRemoval } from '../../utils/localStorage'

const Header = ({ user, history }) => {
    return (
        <div style={{ margin: '32px 0' }} id="header">
            {!user ? <h1>Please enter your name</h1> : <h1>Hello, {user.username}!</h1>}
            {user ? <div>Not {user.username}? <button style={{ background: "none", border: "none"}} onClick={(e) => handleUserRemoval(e, history)}>Click here!</button></div> : null}
        </div>
    )
}

export default Header
