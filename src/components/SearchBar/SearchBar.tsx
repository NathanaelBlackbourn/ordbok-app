import { useState } from 'react';
import styles from './SearchBar.module.scss';

interface Props {
    handleSearch: (term: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value !== '' ? handleSearch(e.target.value) : setError(true);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter word here"
                className={styles.searchBar}
                onChange={handleChange}
            />
            {error && <p>Please enter a word to search.</p>}
        </>
    );
};

export default SearchBar;
