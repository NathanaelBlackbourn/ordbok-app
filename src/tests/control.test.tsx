import { render, screen } from '@testing-library/react';
import App from 'src/App';
import fetchWords from 'src/utils/fetchWords';
import { describe, expect, it } from 'vitest';

describe.skip('should run and pass the following tests', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });

    it('should successfully render the App component', () => {
        render(<App />);

        screen.debug();
    });

    it('should return mock API data', async () => {
        const response = await fetchWords();

        expect(response).toEqual({ message: 'Hello, World!' });
    });
});
