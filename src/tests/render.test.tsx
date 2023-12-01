import { render, screen } from '@testing-library/react';
import App from 'src/App';

describe('initial load and render', () => {
    it('should display the header on load', async () => {
        render(<App />);

        expect(
            await screen.findByText('Search the Dictionary')
        ).toBeInTheDocument();
    });
});
