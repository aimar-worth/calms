import React from 'react'
import { Slider as Slide } from 'antd';

export default function Silder({ name, onChange, value, min, max }) {
    return (
        <>
            <label style={{ textTransform: 'capitalize'}}>{name}</label>
            <Slide 
                onChange={e => onChange(e)}
                value={typeof value[name] === "number" ? value[name] : 1}
                max={max} 
                min={min} 
                tooltipVisible={true} 
                style={{ paddingTop: '40px', paddingBottom: '32px'}}
            />
        </>
    )
}
