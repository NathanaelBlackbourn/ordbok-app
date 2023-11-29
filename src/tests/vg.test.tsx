import { render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';

describe('vg krav', () => {
    it('should be possible to save favorite words to session storage', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Add word 'test'
        user.type(screen.getByRole('textbox'), 'test');
        await waitFor(async () =>
            expect(
                await screen.findByTestId('add-favorite')
            ).toBeInTheDocument()
        );

        user.click(await screen.findByTestId('add-favorite'));

        // Check that the favorites tab contains the word 'test'
        user.click(screen.getByTestId('open-favorites'));
        expect(
            within(await screen.findByTestId('favorites')).getByText('test')
        ).toBeInTheDocument();
    });

    it.skip('should be possible to toggle between light and dark mode', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Get the primary and backgound color variables from the root element
        const primaryColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--primary-color');
        const backgroundColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--background-color');

        // Check the colors of text and background
        const checkColors = (text: string, background: string) => {
            screen
                .getAllByRole('heading')
                .forEach((h) => expect(h).toHaveStyle({ color: text }));

            expect(document.querySelector('body')).toHaveStyle({
                backgroundColor: background,
            });
        };

        // Test button twice
        user.click(screen.getByTestId('mode-button'));
        checkColors(primaryColor, backgroundColor);
        user.click(screen.getByTestId('mode-button'));
        checkColors(backgroundColor, primaryColor);
    });
});
