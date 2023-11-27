import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';

describe.only('g krav', () => {
    const user = userEvent.setup();
    render(<App />);
    it.only('should display filtered results when searching a word', async () => {
        user.type(screen.getByRole('textbox'), 'test');

        expect(
            within(await screen.findByTestId('result')).getByText('test')
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
        user.type(screen.getByRole('textbox'), 'test');

        expect(
            screen.getByRole('button', { name: 'Play audio' })
        ).toBeInTheDocument();

        user.click(screen.getByRole('button', { name: 'Play audio' }));
    });
});
