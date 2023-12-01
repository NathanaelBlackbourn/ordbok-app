import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'src/App';

describe('initial load and render', () => {
    it('should display the header on load', async () => {
        render(<App />);

        expect(
            await screen.findByText('Search the Dictionary')
        ).toBeInTheDocument();
    });

    it('should render a functional search bar', async () => {
        render(<App />);
        const user = userEvent.setup();

        expect(await screen.findByRole('textbox')).toBeInTheDocument();
        await user.type(screen.getByRole('textbox'), 'test');
        expect(screen.getByRole('textbox')).toHaveValue('test');
    });
});
