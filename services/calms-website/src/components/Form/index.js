import React from 'react'
import { Button, Form } from 'antd'

import Slider from '../Slider'

export default function FormSlider({ user, handleSubmit, handleSlider }) {
    return (
        <Form onFinish={() => handleSubmit(user)}>
            <div>
                <Slider 
                    name="culture" 
                    value={user.calms}
                    min={1} 
                    max={10} 
                    onChange={(value) => handleSlider("culture", value)} 
                /> 
                <Slider 
                    name="automation"
                    value={user.calms} 
                    min={1} 
                    max={10} 
                    onChange={(value) => handleSlider("automation", value)} 
                />
                <Slider 
                    name="lean" 
                    value={user.calms} 
                    min={1} 
                    max={10} 
                    onChange={(value) => handleSlider("lean", value)} 
                />
                <Slider 
                    name="measurement" 
                    value={user.calms} 
                    min={1} 
                    max={10} 
                    onChange={(value) => handleSlider("measurement", value)} 
                />
                <Slider 
                    name="sharing" 
                    value={user.calms} 
                    min={1} 
                    max={10} 
                    onChange={(value) => handleSlider("sharing", value)} 
                /> 
            </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button type="primary" htmlType="submit" style={{ width: '100px' }}>Save</Button>
        </div>
    </Form>
    )
}
