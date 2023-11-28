import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';

describe.only('vg krav', () => {
    render(<App />);
    const user = userEvent.setup();

    it.skip('should be possible to save favorite words to session storage', async () => {
        user.type(screen.getByRole('textbox'), 'test');
        user.click(await screen.findByTestId('add-favorite'));
        user.click(screen.getByTestId('open-favorites'));

        expect(
            within(await screen.findByTestId('favorites')).getByText('test')
        ).toBeInTheDocument();
    });

    it.only('should be possible to toggle between light and dark mode', async () => {
        let prevMode = document.querySelector('html')?.className;
        console.log(prevMode);

        const checkModeChange = async () => {
            user.click(await screen.findByTestId('mode-button'));

            const newMode = document.querySelector('html')?.className;
            console.log('newMode', newMode);
            console.log('classList', ...document.documentElement.classList);

            expect(newMode).not.toBe('');
            prevMode === 'dark'
                ? expect(newMode).toBe('light')
                : expect(newMode).toBe('dark');
            prevMode = newMode;
        };

        expect(await checkModeChange()).not.toThrow();
        expect(await checkModeChange()).not.toThrow();
    });
});
