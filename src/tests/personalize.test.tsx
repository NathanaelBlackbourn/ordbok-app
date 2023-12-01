import { render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';
import ButtonPanel from 'src/components/ButtonPanel/ButonPanel';
import { vi } from 'vitest';

describe('personalization of the site', () => {
    it('should be possible to save favorite words to session storage and remove them', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Add word 'test'
        await user.type(screen.getByRole('textbox'), 'test');
        const addFav = await screen.findByTitle('Add to favorites');
        expect(addFav).toBeInTheDocument();
        await user.click(addFav);

        // Check that the favorites tab contains the word 'test'
        await user.click(screen.getByTitle('Open favorites'));
        expect(
            within(await screen.findByTestId('favorites')).getByText('test')
        ).toBeInTheDocument();

        // Remove word 'test'
        await user.click(screen.getByText('test'));
        expect(
            within(await screen.findByTestId('result')).getByText('test')
        ).toBeInTheDocument();
        await user.click(await screen.findByTitle('Add to favorites'));

        // Check that the favorites tab does not contain the word 'test'
        await user.click(screen.getByTitle('Open favorites'));
        expect(
            within(await screen.findByTestId('favorites')).queryByText('test')
        ).not.toBeInTheDocument();
    });

    it('should be possible to toggle between light and dark mode', async () => {
        render(<ButtonPanel setShowFavorites={vi.fn()} />);
        const user = userEvent.setup();

        // Mode button is in the document
        const modeButton = await screen.findByTestId('mode-button');
        expect(modeButton).toBeInTheDocument();

        const checkColorChange = async () => {
            // Body currently has mode class
            const modes = ['light', 'dark'];
            const prevMode = document.body.className;
            expect(modes).toContain(prevMode);

            // Body class changes mode on button click
            await user.click(modeButton);
            await waitFor(() => {
                const newMode = document.body.className;
                expect(newMode).toBe(modes.find((m) => m !== prevMode));
            });
        };

        // Test multiple toggles
        expect(checkColorChange).not.toThrow();
        expect(checkColorChange).not.toThrow();
        expect(checkColorChange).not.toThrow();
    });
});
