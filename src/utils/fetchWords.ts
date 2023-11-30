const fetchWords = async (term?: string) => {
    if (!term) return;
    return fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term ? term : ''}`
    ).then((res) => (res.ok ? res.json() : Promise.reject(res)));
};

export default fetchWords;
