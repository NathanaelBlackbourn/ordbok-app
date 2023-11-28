import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';
import { iPhonetic } from 'src/types/response';
import fetchWords from 'src/utils/fetchWords';

describe.skip('g krav', () => {
    const user = userEvent.setup();
    render(<App />);
    it('should display filtered results when searching a word', async () => {
        user.type(screen.getByRole('textbox'), 'test');

        expect(
            within(await screen.findByTestId('result')).getByText('test')
        ).toBeInTheDocument();
    });

    it('should should display an error message when the search bar is empty', () => {
        user.type(screen.getByRole('textbox'), 'test');
        user.clear(screen.getByRole('textbox'));

        expect(
            screen.getByText('Please enter a word to search.')
        ).toBeInTheDocument();
    });

    it('should be possible to play sound files when available', async () => {
        user.clear(screen.getByRole('textbox'));

        const hasAudio = await fetchWords('test').then(
            (data) =>
                data[0].phonetics.find((phonetic: iPhonetic) => phonetic.audio)
                    .audio
        );

        if (!hasAudio)
            throw new Error('No audio was found for the word "test".'); // TODO: Improve quality of this test

        // TODO: Somehow test that the sound is being played
        // Potentially just if the play method is being called

        user.type(screen.getByRole('textbox'), 'test');

        expect(await screen.findByTestId('audio-button')).toBeInTheDocument();

        user.click(screen.getByTestId('audio-button'));
    });
});
