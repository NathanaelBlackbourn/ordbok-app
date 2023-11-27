import styles from './Result.module.scss';

import { WordData } from 'src/types/response';

interface Props {
    result: WordData;
}

const Results = ({ result }: Props) => {
    return (
        <div data-testid="result">
            <h2 className={styles.heading}>{result.word}</h2>
            <h3 className={styles.phonetic}>{result.phonetic}</h3>
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
