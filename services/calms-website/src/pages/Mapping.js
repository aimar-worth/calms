import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { getUser, saveUser } from '../utils/api'

import Loader from '../components/Loader'
import Header from '../components/Header'
import Form from '../components/Form'

const MappingPage = ({ history }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUser(setUser).then(res => {
            if (!res) {
                history.push('/')
            }
        })
        setLoading(false)
    }, [history])

    const handleSlider = (name, value) => {
        const currentUser = {...user}
        currentUser.calms[name] = value
        setUser(prevUser => ({
            ...prevUser,
            currentUser
        }))
    }

    const handleSubmit = (user) => {
        saveUser(user)
    }

    return (
        <div style={{ margin: '32px' }}>
            {loading ? <Loader /> : null}
            <Header user={user} />
            { user ? <Form handleSubmit={handleSubmit} handleSlider={handleSlider} user={user} /> : null}
        </div>
    )
}

export default withRouter(MappingPage)