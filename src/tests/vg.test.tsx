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
        const primaryColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--primary-color');
        const backgroundColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--background-color');

        const checkColors = (text: string, background: string) => {
            screen
                .getAllByRole('heading')
                .forEach((h) => expect(h).toHaveStyle({ color: text }));

            expect(document.querySelector('body')).toHaveStyle({
                backgroundColor: background,
            });
        };

        user.click(screen.getByTestId('mode-button'));
        checkColors(primaryColor, backgroundColor);
        user.click(screen.getByTestId('mode-button'));
        checkColors(backgroundColor, primaryColor);
    });
});
