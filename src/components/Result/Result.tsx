import styles from './Result.module.scss';

import { useMemo } from 'react';

import { iWordData } from 'src/types/response';

import AddFavorite from '../AddFavorite/AddFavorite';
import AudioButton from '../AudioButton/AudioButton';
import Meaning from '../Meaning/Meaning';

interface Props {
    result: iWordData;
}

const Results = ({ result }: Props) => {
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
            <div className={styles.header}>
                <h2 className={styles.word}>{result.word}</h2>
                <AddFavorite word={result.word} />
            </div>
            <div className={styles.pronunciation}>
                {phonetic && <h3 className={styles.phonetic}>{phonetic}</h3>}
                {!!audio && <AudioButton audio={audio} />}
            </div>
            <h3>Definitions</h3>
            <ul className={styles.meaningList}>
                {result?.meanings &&
                    result.meanings.map((meaning, i) => (
                        <Meaning key={i} meaning={meaning} />
                    ))}
            </ul>
        </div>
    );
};

export default Results;
