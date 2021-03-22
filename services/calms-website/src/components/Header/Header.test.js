import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

it("Renders message when user is not created", () => {
    render(<MemoryRouter><Header /></MemoryRouter>)
    expect(screen.getByText('Please enter your name'))
})

it("Render user name if user is created", () => {
    render(<MemoryRouter><Header user={{ username: 'Peter'}} /></MemoryRouter>)
    expect(screen.getByText('Hello, Peter!'))
})

it("Allows to remove the user", () => {
    const history = { push: jest.fn() }
    render(<MemoryRouter><Header user={{ username: 'Peter'}} history={history} /></MemoryRouter>)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Not Peter?'))
    expect(history.push).toHaveBeenCalledWith('/');
})