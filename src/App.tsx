import styles from './App.module.scss';

import { useState } from 'react';
import fetchWords from './utils/fetchWords';

import Heading from './components/Heading/Heading';
import Results from './components/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
    const [results, setResults] = useState([]);

    const handleSearch = (term: string) => {
        fetchWords(term).then((data) => setResults(data));
    };

    return (
        <>
            <div className={styles.left}>
                <Heading />
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className={styles.right}>
                {!!results.length && <Results results={results} />}
            </div>
        </>
    );
}

export default App;
