import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'src/App';

describe('initial load and render', () => {
    it('should display the header on load', async () => {
        render(<App />);

        // Check that title is visible on page
        expect(
            await screen.findByText('Search the Dictionary')
        ).toBeInTheDocument();
    });

    it('should render a functional search bar', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Check that the search bar is visible on page
        expect(await screen.findByRole('textbox')).toBeInTheDocument();

        // Check that the user can type in the search bar
        await user.type(screen.getByRole('textbox'), 'test');
        expect(screen.getByRole('textbox')).toHaveValue('test');
    });
});
