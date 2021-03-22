import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { createUser, getUser } from '../utils/api'

import Loader from '../components/Loader'
import Header from '../components/Header'


const EnterNamePage = ({ history }) => {
    const [name, setName] = useState('')
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUser(setUser)
        setLoading(false)
    }, [history, user])

    const handleNameChange = (e) => {
      e.preventDefault();
      setName(e.target.value)
    }
  
    const handleSubmit = (data) => {
        createUser(data.username).then(res => {
            if (res) {
                history.push('/mapping')
            }
        })
    }

    if (user) {
        history.push('/mapping')
    }

    return (
        <div style={{ margin: '32px' }}>
            {loading ? <Loader /> : null}
            <Header user={user} />
            <Form onFinish={handleSubmit} id="form">
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input id="input" type="text" value={name} onChange={handleNameChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Ok</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default withRouter(EnterNamePage)