import { render, screen, fireEvent } from '@testing-library/react'
import Form from './Form'

const handleSubmit = jest.fn()
const handleSlider = jest.fn()

const user = {
    // id: "GmiCgbxo9PSFqmkbrVbH",
    // username: "Peter",
    calms: {
        automation: 8,
        culture: 2,
        lean: 6,
        measurement: 7,
        sharing: 3
    }
}

beforeEach(() => {
    render(<Form handleSubmit={handleSubmit} handleSlider={handleSlider} user={user} />)
})

it('renders a form', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByText('culture')).toBeInTheDocument();
    expect(screen.getByText('automation')).toBeInTheDocument();
    expect(screen.getByText('lean')).toBeInTheDocument();
    expect(screen.getByText('measurement')).toBeInTheDocument();
    expect(screen.getByText('sharing')).toBeInTheDocument();
})

it('should submit the form', () => {
    // const button = screen.getByTestId('button');
    // screen.debug()
    // fireEvent.click(button);
    // expect(handleSubmit).toHaveBeenCalled()
})