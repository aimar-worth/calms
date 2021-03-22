import { render, screen } from '@testing-library/react'
import Loader from './Loader'

it("shows loading page with text", () => {
    render(<Loader />)
    expect(screen.getByText('Loading!'))
})