const fetchWords = async (term?: string) => {
    if (!term) return [];
    return fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term ? term : ''}`
    )
        .then((res) => res.json())
        .catch(() => []);
};

export default fetchWords;
