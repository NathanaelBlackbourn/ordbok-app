const fetchWords = async (term?: string) =>
    fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term ? term : ''}`
    ).then((res) => res.json());

export default fetchWords;
