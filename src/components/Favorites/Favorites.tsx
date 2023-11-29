import { ArrowRight } from '@phosphor-icons/react';
import styles from './Favorites.module.scss';

import { useEffect, useState } from 'react';

interface Props {
    handleSearch: (term: string) => void;
}

const Favorites = ({ handleSearch }: Props) => {
    const [data, setData] = useState<string[] | null>(null);

    useEffect(() => {
        const session = sessionStorage.getItem('favorites');
        session && setData(JSON.parse(session));
    }, []);

    return (
        <div className={styles.container}>
            <h2>Favorites</h2>
            <ul data-testid="favorites" className={styles.ul}>
                {data?.length ? (
                    data.map((item, i) => (
                        <li className={styles.li} key={i}>
                            <button
                                className={styles.button}
                                onClick={() => handleSearch(item)}
                            >
                                <h3>{item}</h3>
                                <span>
                                    <ArrowRight
                                        size={23}
                                        className={styles.icon}
                                    />
                                </span>
                            </button>
                        </li>
                    ))
                ) : (
                    <h4>'No favorites yet'</h4>
                )}
            </ul>
        </div>
    );
};

export default Favorites;
