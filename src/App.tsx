import styles from './App.module.scss';

import { useMemo, useState } from 'react';
import fetchWords from './utils/fetchWords';

import ButtonPanel from './components/ButtonPanel/ButonPanel';
import Favorites from './components/Favorites/Favorites';
import Heading from './components/Heading/Heading';
import NotFound from './components/NotFound/NotFound';
import Result from './components/Result/Result';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
    const [result, setResult] = useState(null);
    const [showFavorites, setShowFavorites] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const handleSearch = (term: string) => {
        setResult(null);
        fetchWords(term)
            .then((data) => data && setResult(data[0]))
            .catch(() => setNotFound(true));
        setShowFavorites(false);
    };

    useMemo(() => {
        document.documentElement.className = 'light';
    }, []);

    useMemo(() => {
        result && setNotFound(false);
    }, [result]);

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <Heading />
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className={styles.section}>
                {/* {showFavorites ? (
                    <Favorites handleSearch={handleSearch} />
                ) : (
                    (result && <Result result={result} />)
                )} */}
                {showFavorites ? (
                    <Favorites handleSearch={handleSearch} />
                ) : notFound ? (
                    <NotFound />
                ) : (
                    result && <Result result={result} />
                )}
            </div>
            <ButtonPanel setShowFavorites={setShowFavorites} />
        </div>
    );
}

export default App;
