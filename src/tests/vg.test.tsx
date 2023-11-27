import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';

describe.skip('vg krav', () => {
    render(<App />);
    const user = userEvent.setup();

    it('should be possible to save favourite words to session storage', () => {
        user.type(screen.getByRole('textbox'), 'test');
        user.click(screen.getByRole('button', { name: 'save' }));

        const favsJSON = sessionStorage.getItem('favouriteWords');
        if (!favsJSON) throw new Error('favsJSON is undefined');

        expect(JSON.parse(favsJSON)?.test).toBeDefined();
    });

    it('should be possible to toggle between light and dark mode', () => {
        let prevMode = document.querySelector('body')?.classList[0];
        if (!prevMode) throw new Error('No color mode detected');

        const checkModeChange = () => {
            user.click(screen.getByRole('button', { name: 'color-mode' }));

            const newMode = document.querySelector('body')?.classList[0];
            if (!newMode) throw new Error('Color mode change failed');
            prevMode === 'light'
                ? expect(newMode).toBe('dark')
                : expect(newMode).toBe('light');
            prevMode = newMode;
        };

        checkModeChange();
        checkModeChange();
    });
});
