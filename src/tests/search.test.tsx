import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';
import { mocks } from './utils';

describe('search and result functions', () => {
    it('should display filtered results when searching a word', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search a word
        await user.type(screen.getByRole('textbox'), 'test');

        // Check that the word appears in the reult tab
        expect(
            within(await screen.findByTestId('result')).getByText('test')
        ).toBeInTheDocument();
    });

    it('should should display an error message when the search bar is empty', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search a word then clear the search bar
        await user.type(screen.getByRole('textbox'), 'test');
        await user.clear(screen.getByRole('textbox'));

        // Check that the prompt appears to enter a word
        expect(
            screen.getByText('Please enter a word to search')
        ).toBeInTheDocument();
    });

    it('should be possible to play sound files when available', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search 'test'
        await user.type(screen.getByRole('textbox'), 'test');

        // Assert that button renders
        // Icon alt text renders as title tag inside icons, hence findByTitle
        const audioButton = await screen.findByTitle('Play audio');
        expect(audioButton).toBeInTheDocument();

        await user.click(audioButton);

        // Assert that the audio play function is called
        expect(mocks.Audio.play).toHaveBeenCalled();
    });
});
