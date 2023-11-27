import styles from './App.module.scss';

import { useEffect, useState } from 'react';
import fetchWords from './utils/fetchWords';

import Heading from './components/Heading/Heading';
import Result from './components/Result/Result';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
    const [result, setResult] = useState({});

    const handleSearch = (term: string) => {
        fetchWords(term).then((data) => setResult(data[0]));
    };

    useEffect(() => {
        console.log(result);
    }, [result]);

    return (
        <>
            <div className={styles.left}>
                <Heading />
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className={styles.right}>
                {result && <Result result={result} />}
            </div>
        </>
    );
}

export default App;
