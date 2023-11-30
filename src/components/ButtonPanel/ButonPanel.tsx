import styles from './ButtonPanel.module.scss';

import { useState } from 'react';

import { Moon, Star, Sun } from '@phosphor-icons/react';

interface Props {
    setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonPanel = ({ setShowFavorites }: Props) => {
    const [nightMode, setNightMode] = useState(false);

    const changeMode = () => {
        document.documentElement.className =
            ['light', 'dark'].find(
                (c) => c !== document.documentElement.className
            ) || 'light';

        setNightMode((prev) => !prev);
    };

    return (
        <div className={styles.panel}>
            <button
                className={styles.button}
                data-testid="mode-button"
                onClick={changeMode}
            >
                <Sun
                    weight="light"
                    size={32}
                    className={styles.sun}
                    style={{ bottom: nightMode ? '100%' : '0%' }}
                    alt="Change color mode"
                />
                <Moon
                    weight="light"
                    size={32}
                    className={styles.moon}
                    style={{ top: nightMode ? '0%' : '100%' }}
                    alt="Change color mode"
                />
            </button>
            <Star
                weight="light"
                size={32}
                className={styles.star}
                onClick={() => setShowFavorites((prev) => !prev)}
                data-testid="open-favorites"
                alt="Open favorites"
            />
        </div>
    );
};

export default ButtonPanel;
