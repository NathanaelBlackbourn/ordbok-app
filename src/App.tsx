import styles from './App.module.scss';

import { useMemo, useState } from 'react';
import fetchWords from './utils/fetchWords';

import ButtonPanel from './components/ButtonPanel/ButonPanel';
import Favorites from './components/Favorites/Favorites';
import Heading from './components/Heading/Heading';
import Result from './components/Result/Result';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
    const [result, setResult] = useState(null);
    const [showFavorites, setShowFavorites] = useState(false);

    const handleSearch = (term: string) => {
        setResult(null);
        fetchWords(term).then((data) => setResult(data[0]));
        setShowFavorites(false);
    };

    useMemo(() => {
        document.documentElement.className = 'light';
    }, []);

    return (
        <>
            <div className={styles.left}>
                <Heading />
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className={styles.right}>
                {showFavorites ? (
                    <Favorites handleSearch={handleSearch} />
                ) : (
                    result && <Result result={result} />
                )}
            </div>
            <ButtonPanel setShowFavorites={setShowFavorites} />
        </>
    );
}

export default App;
