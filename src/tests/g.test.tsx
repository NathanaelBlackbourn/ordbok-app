import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from 'src/App'

describe('g krav', () => {
    const user = userEvent.setup()
    render(<App />)
    it('should display filtered results when searching a word', () => {
        user.type(screen.getByRole('textbox'), 'test')

        expect(
            within(screen.getByTestId('results')).getByText('test')
        ).toBeInTheDocument()
    })

    it('should should display an error message when the search bar is empty', () => {
        user.type(screen.getByRole('textbox'), 'test')
        user.clear(screen.getByRole('textbox'))

        expect(
            screen.getByText('Please enter a word to search.')
        ).toBeInTheDocument()
    })

    it('should be possible to play sound files when available', async () => {
        // Fetch a word with a sound file
        // const results = await fetchWords();
        // const withSound = results.find((result: any) => result.sound !== undefined) // TODO: Define result type
        // Search for that word in the app
        // Check that the sound file is present
        // Test playing the sound file
    })
})
