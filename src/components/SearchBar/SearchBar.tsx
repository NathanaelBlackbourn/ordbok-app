import styles from './SearchBar.module.scss';

interface Props {
    handleSearch: (term: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
    return (
        <input
            type="text"
            placeholder="Enter word here"
            className={styles.searchBar}
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
};

export default SearchBar;
