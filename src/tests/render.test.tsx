import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'src/App';

describe('initial load and render', () => {
    it('should display the header on load', async () => {
        render(<App />);

        // Title is visible on page
        expect(
            await screen.findByText('Search the Dictionary')
        ).toBeInTheDocument();
    });

    it('should render a functional search bar', async () => {
        render(<App />);
        const user = userEvent.setup();

        // The search bar is visible on page
        expect(await screen.findByRole('textbox')).toBeInTheDocument();

        // The user can type in the search bar
        await user.type(screen.getByRole('textbox'), 'test');
        expect(screen.getByRole('textbox')).toHaveValue('test');
    });

    it('should render the favorites tab', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Open the favorites tab
        await user.click(screen.getByTitle('Open favorites'));

        // The title is in the document
        expect(await screen.findByText('Favorites')).toBeInTheDocument();
    });
});
