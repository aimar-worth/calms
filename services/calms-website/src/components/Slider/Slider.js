import React from 'react'
import Slider from '@material-ui/core/Slider';

export default function SilderComp({ name, onChange, value, min, max }) {
    return (
        <>
            <label style={{ textTransform: 'capitalize'}}>{name}</label>
            <Slider 
                onChange={onChange}
                value={value}
                max={max} 
                min={min} 
                valueLabelDisplay="on"
                style={{ paddingTop: '40px', paddingBottom: '32px'}}
            />
        </>
    )
}
