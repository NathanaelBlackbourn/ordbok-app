import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';

describe('personalization of the site', () => {
    it('should be possible to save favorite words to session storage', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Add word 'test'
        await user.type(screen.getByRole('textbox'), 'test');
        expect(await screen.findByTestId('add-favorite')).toBeInTheDocument();
        await user.click(screen.getByTestId('add-favorite'));

        // Check that the favorites tab contains the word 'test'
        await user.click(screen.getByTestId('open-favorites'));
        expect(
            within(await screen.findByTestId('favorites')).getByText('test')
        ).toBeInTheDocument();
    });

    it('should be possible to toggle between light and dark mode', async () => {
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
        await user.click(screen.getByTestId('mode-button'));
        checkColors(primaryColor, backgroundColor);
        await user.click(screen.getByTestId('mode-button'));
        checkColors(backgroundColor, primaryColor);
    });
});
