import { iWordData } from 'src/types/response';

const data: iWordData[] = [
    {
        word: 'test',
        phonetic: '/test/',
        phonetics: [
            {
                text: '/test/',
                audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/test-uk.mp3',
                sourceUrl:
                    'https://commons.wikimedia.org/w/index.php?curid=9014228',
                license: {
                    name: 'BY 3.0 US',
                    url: 'https://creativecommons.org/licenses/by/3.0/us',
                },
            },
            {
                text: '/test/',
                audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/test-us.mp3',
                sourceUrl:
                    'https://commons.wikimedia.org/w/index.php?curid=1197419',
                license: {
                    name: 'BY-SA 3.0',
                    url: 'https://creativecommons.org/licenses/by-sa/3.0',
                },
            },
        ],
        meanings: [
            {
                partOfSpeech: 'noun',
                definitions: [
                    {
                        definition: 'A challenge, trial.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'A cupel or cupelling hearth in which precious metals are melted for trial and refinement.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            '(academia) An examination, given often during the academic term.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'A session in which a product or piece of equipment is examined under everyday or extreme conditions to evaluate its durability, etc.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition: '(normally “Test”) A Test match.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'The external calciferous shell, or endoskeleton, of an echinoderm, e.g. sand dollars and sea urchins.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition: 'Testa; seed coat.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition: 'Judgment; distinction; discrimination.',
                        synonyms: [],
                        antonyms: [],
                    },
                ],
                synonyms: ['examination', 'quiz'],
                antonyms: ['recess'],
            },
            {
                partOfSpeech: 'verb',
                definitions: [
                    {
                        definition: 'To challenge.',
                        synonyms: [],
                        antonyms: [],
                        example: 'Climbing the mountain tested our stamina.',
                    },
                    {
                        definition:
                            'To refine (gold, silver, etc.) in a test or cupel; to subject to cupellation.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'To put to the proof; to prove the truth, genuineness, or quality of by experiment, or by some principle or standard; to try.',
                        synonyms: [],
                        antonyms: [],
                        example:
                            'to test the soundness of a principle; to test the validity of an argument',
                    },
                    {
                        definition:
                            '(academics) To administer or assign an examination, often given during the academic term, to (somebody).',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'To place a product or piece of equipment under everyday and/or extreme conditions and examine it for its durability, etc.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition: 'To be shown to be by test.',
                        synonyms: [],
                        antonyms: [],
                        example: 'He tested positive for cancer.',
                    },
                    {
                        definition:
                            'To examine or try, as by the use of some reagent.',
                        synonyms: [],
                        antonyms: [],
                        example: 'to test a solution by litmus paper',
                    },
                ],
                synonyms: [],
                antonyms: [],
            },
        ],
        license: {
            name: 'CC BY-SA 3.0',
            url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
        sourceUrls: ['https://en.wiktionary.org/wiki/test'],
    },
];

export default data;
