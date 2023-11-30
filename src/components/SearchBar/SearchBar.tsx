import { useState } from 'react';
import styles from './SearchBar.module.scss';

interface Props {
    handleSearch: (term: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value !== ''
            ? (handleSearch(e.target.value), setError(false))
            : setError(true);
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Enter word here"
                className={styles.searchBar}
                onChange={handleChange}
            />
            <p className={styles.error}>
                {error && 'Please enter a word to search'}
            </p>
        </div>
    );
};

export default SearchBar;
