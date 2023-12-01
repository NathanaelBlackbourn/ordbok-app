import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';

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
        checkColors(primaryColor, backgroundColor);
        await user.click(screen.getByTestId('mode-button'));
        checkColors(backgroundColor, primaryColor);
        await user.click(screen.getByTestId('mode-button'));
        checkColors(primaryColor, backgroundColor);
    });
});
