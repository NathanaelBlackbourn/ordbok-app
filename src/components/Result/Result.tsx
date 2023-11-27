import styles from './Result.module.scss';

import { useEffect, useMemo, useState } from 'react';

import { Play, Stop } from '@phosphor-icons/react';
import { WordData } from 'src/types/response';

interface Props {
    result: WordData;
}

const Results = ({ result }: Props) => {
    const [audioPlaying, setAudioPlaying] = useState(false);

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

    useEffect(() => {
        if (!audio) return;
        const handleEnded = () => setAudioPlaying(false);
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    return (
        <div data-testid="result">
            <h2 className={styles.heading}>{result.word}</h2>
            <div className={styles.pronunciation}>
                {phonetic && <h3 className={styles.phonetic}>{phonetic}</h3>}
                {!!audio && (
                    <div className={styles.audioContainer}>
                        <button
                            className={styles.audioButton}
                            onClick={() => {
                                audio.play();
                                setAudioPlaying(true);
                            }}
                            data-testid="audio-button"
                        >
                            {audioPlaying ? (
                                <Stop size={32} />
                            ) : (
                                <Play size={32} />
                            )}
                        </button>
                    </div>
                )}
            </div>
            {result?.meanings &&
                result.meanings.map((meaning, i) => (
                    <li key={i} className={styles.meaning}>
                        <h3 className={styles.partOfSpeech}>
                            {meaning.partOfSpeech}
                        </h3>
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
                    </li>
                ))}
        </div>
    );
};

export default Results;
