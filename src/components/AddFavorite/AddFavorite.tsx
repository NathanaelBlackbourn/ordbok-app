import styles from './AddFavorite.module.scss';

import { Star } from '@phosphor-icons/react';

import { useEffect, useRef, useState } from 'react';

interface Props {
    word: string;
}

const AddFavorite = ({ word }: Props) => {
    const [inFavorites, setInFavorites] = useState(false);

    const session = useRef(
        JSON.parse(sessionStorage.getItem('favorites') || '[]')
    );

    useEffect(() => {
        if (!session.current.length) return;
        setInFavorites(session.current.includes(word));
    }, [word]);

    const handleClick = () => {
        inFavorites ? removeFromFavorites() : addToFavorites();
    };

    const removeFromFavorites = () => {
        const index = session.current.indexOf(word);
        session.current.splice(index, 1);
        sessionStorage.setItem('favorites', JSON.stringify(session.current));
        setInFavorites(false);
    };

    const addToFavorites = () => {
        session.current.push(word);
        sessionStorage.setItem('favorites', JSON.stringify(session.current));
        setInFavorites(true);
    };

    return (
        <button onClick={handleClick} data-testid="add-favorite">
            <Star
                size={32}
                weight={inFavorites ? 'fill' : 'light'}
                className={styles.icon}
                alt="Add to favorites"
            />
        </button>
    );
};

export default AddFavorite;
