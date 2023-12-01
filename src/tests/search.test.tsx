import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from 'src/App';
import data from 'src/mocks/data';
import { mocks } from './utils';

describe('search and result functions', () => {
    it('should display filtered results when searching a word', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search a word
        await user.type(screen.getByRole('textbox'), 'test');

        // Check that the word appears in the reult tab
        expect(
            within(await screen.findByTestId('result')).getByText('test')
        ).toBeInTheDocument();

        expect(await screen.findByText('Definitions')).toBeInTheDocument();
    });

    it('should render all data under dropdowns in search result', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Searcg
        await user.type(await screen.findByRole('textbox'), 'test');

        // Heading 'Definitions' renders
        expect(await screen.findByText('Definitions')).toBeInTheDocument();

        // All 'meanings' render
        const meanings = await screen.findAllByTestId('meaning');
        meanings.forEach((meaning, i) => {
            expect(
                within(meaning).getByText(data[0].meanings[i].partOfSpeech)
            ).toBeInTheDocument();
            expect(within);
        });

        // Dropdown reveals difinitions
        const meaning = meanings[0];
        await user.click(await within(meaning).findByRole('button'));
        const testDefs = data[0].meanings[0].definitions.map(
            (def) => def.definition
        );
        testDefs.forEach((def) =>
            expect(within(meaning).getByText(def)).toBeInTheDocument()
        );

        // All examples are in the document
        const examples = data[0].meanings[0].definitions.map(
            (def) => def.example && def.example
        );
        examples.forEach((example) => {
            if (example) {
                expect(within(meaning).getByText(example)).toBeInTheDocument();
            }
        });

        // All synonyms are rendered
        // Check only that the word exists somewhere in the right container
        // in order to allow for changes in design
        const synonyms = data[0].meanings[0].synonyms;
        synonyms.length &&
            synonyms.forEach((syn) => expect(meaning).toContainHTML(syn));

        // All antonyms are rendered
        const antonyms = data[0].meanings[0].antonyms;
        console.log(antonyms);
        antonyms.length &&
            antonyms.forEach((ant) => expect(meaning).toContainHTML(ant));
    });

    it('should should display an error message when the search bar is empty', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search a word then clear the search bar
        await user.type(screen.getByRole('textbox'), 'test');
        await user.clear(screen.getByRole('textbox'));

        // Check that the prompt appears to enter a word
        expect(
            screen.getByText('Please enter a word to search')
        ).toBeInTheDocument();
    });

    it('should display the message "Word not found" when the search term is not found', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search a non-existent word
        await user.type(screen.getByRole('textbox'), 'xwisk');

        expect(await screen.findByText('Word not found')).toBeInTheDocument();
    });

    it('should be possible to play sound files when available', async () => {
        render(<App />);
        const user = userEvent.setup();

        // Search 'test'
        await user.type(screen.getByRole('textbox'), 'test');

        // Assert that button renders
        // Icon alt text renders as title tag inside icons, hence findByTitle
        const audioButton = await screen.findByTitle('Play audio');
        expect(audioButton).toBeInTheDocument();

        await user.click(audioButton);

        // Assert that the audio play function is called
        expect(mocks.Audio.play).toHaveBeenCalled();
    });
});
