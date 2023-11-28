export interface iLicense {
    name: string;
    url: string;
}

export interface iPhonetic {
    text: string;
    audio: string;
    sourceUrl: string;
    license: iLicense;
}

export interface iDefinition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
}

export interface iMeaning {
    partOfSpeech: string;
    definitions: iDefinition[];
    synonyms: string[];
    antonyms: string[];
}

export interface iWordData {
    word: string;
    phonetic: string;
    phonetics: iPhonetic[];
    meanings: iMeaning[];
    license: iLicense;
    sourceUrls: string[];
}
