import React from 'react'
import { Button, Form } from 'antd'

import Slider from '../Slider'

export default function FormSlider({ user, handleSubmit, handleSlider }) {
    return (
        <Form onFinish={() => handleSubmit(user)} data-testid="form">
            <div>
                <Slider 
                    name="culture" 
                    value={user.calms.culture}
                    min={1} 
                    max={10} 
                    onChange={(e, value) => handleSlider(e, "culture", value)} 
                /> 
                <Slider 
                    name="automation"
                    value={user.calms.automation} 
                    min={1} 
                    max={10} 
                    onChange={(e, value) => handleSlider(e, "automation", value)} 
                />
                <Slider 
                    name="lean" 
                    value={user.calms.lean} 
                    min={1} 
                    max={10} 
                    onChange={(e, value) => handleSlider(e, "lean", value)} 
                />
                <Slider 
                    name="measurement" 
                    value={user.calms.measurement} 
                    min={1} 
                    max={10} 
                    onChange={(e, value) => handleSlider(e, "measurement", value)} 
                />
                <Slider 
                    name="sharing" 
                    value={user.calms.sharing} 
                    min={1} 
                    max={10} 
                    onChange={(e, value) => handleSlider(e, "sharing", value)} 
                /> 
            </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button type="primary" htmlType="submit" data-testid="button" style={{ width: '100px' }}>Save</Button>
        </div>
    </Form>
    )
}
