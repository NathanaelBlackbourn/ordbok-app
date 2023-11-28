import styles from './Meaning.module.scss';

import { iMeaning } from 'src/types/response';

import { Plus } from '@phosphor-icons/react';
import { useState } from 'react';

interface Props {
    meaning: iMeaning;
}

const Meaning = ({ meaning }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.meaning}>
            <button
                className={styles.dropdown}
                onClick={() => setOpen((prev) => !prev)}
            >
                <h3 className={styles.partOfSpeech}>{meaning.partOfSpeech}</h3>
                <Plus
                    size={32}
                    style={open ? { transform: 'rotate(45deg)' } : {}}
                    className={styles.icon}
                />
            </button>
            {open && (
                <ol>
                    {meaning.definitions.map((definition, i) => (
                        <li key={i} className={styles.definition}>
                            <p className={styles.definition}>
                                {definition.definition}
                            </p>
                            {definition.example && (
                                <p className={styles.example}>
                                    {definition.example}
                                </p>
                            )}
                        </li>
                    ))}
                </ol>
            )}
        </li>
    );
};

export default Meaning;
