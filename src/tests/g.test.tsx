import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';
import { WordData } from 'src/types/response';
import fetchWords from 'src/utils/fetchWords';

describe.only('g krav', () => {
    const user = userEvent.setup();
    render(<App />);
    it.only('should display filtered results when searching a word', async () => {
        user.type(screen.getByRole('textbox'), 'test');

        expect(
            within(await screen.findByTestId('results')).getByText('test')
        ).toBeInTheDocument();
    });

    it.skip('should should display an error message when the search bar is empty', () => {
        user.type(screen.getByRole('textbox'), 'test');
        user.clear(screen.getByRole('textbox'));

        expect(
            screen.getByText('Please enter a word to search.')
        ).toBeInTheDocument();
    });

    it.skip('should be possible to play sound files when available', async () => {
        const results: WordData[] = await fetchWords();
        const withSound = results.find((result) => !!result.phonetics.length); // TODO: Define result type
        if (!withSound) throw new Error('No word with sound file found.');

        user.type(screen.getByRole('textbox'), withSound.word);
        user.click(
            within(screen.getByTestId('results')).getByText(withSound.word)
        );

        expect(
            screen.getByRole('button', { name: 'Play audio' })
        ).toBeInTheDocument();

        user.click(screen.getByRole('button', { name: 'Play audio' }));
        screen.debug();
    });
});
