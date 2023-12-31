import styles from './Result.module.scss';

import { useMemo } from 'react';

import { iWordData } from 'src/types/response';

import AddFavorite from '../AddFavorite/AddFavorite';
import AudioButton from '../AudioButton/AudioButton';
import Meaning from '../Meaning/Meaning';

interface Props {
    result: iWordData;
}

const Result = ({ result }: Props) => {
    const audio = useMemo(() => {
        const sample = result.phonetics.find((phonetic) => phonetic.audio);
        return new Audio(sample?.audio) || null;
    }, [result]);

    const phonetic = useMemo(() => {
        return (
            result.phonetic ||
            result.phonetics.find((phonetic) => phonetic.text)?.text ||
            null
        );
    }, [result]);

    return (
        <div data-testid="result">
            <div className={styles.headerRow}>
                <h2 className={styles.word}>{result.word}</h2>
                <AddFavorite word={result.word} />
            </div>
            <div className={styles.headerRow}>
                {phonetic && <h3 className={styles.phonetic}>{phonetic}</h3>}
                {!!audio && <AudioButton audio={audio} />}
            </div>
            <div className={styles.headerRow}>
                <h3>Definitions</h3>
            </div>
            <ul className={styles.meaningList}>
                {result?.meanings &&
                    result.meanings.map((meaning, i) => (
                        <Meaning key={i} meaning={meaning} />
                    ))}
            </ul>
        </div>
    );
};

export default Result;
