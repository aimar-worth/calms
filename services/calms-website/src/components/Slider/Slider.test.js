import { render, screen } from '@testing-library/react'
import Slider from './Slider'

const handleSlider = jest.fn()
const props = {
    name: "culture",
    value: 1,
    min: 1,
    max: 10, 
    onChange: (value) => handleSlider("culture", value),
    dataTestId: "pla"
}

beforeEach(() => {
    render(<Slider {...props} />)
})

it("slider has a label", () => {
    expect(screen.getByText('culture'))
})

it("slider initial value is 1", () => {
    expect(screen.getByText('1'))
})

