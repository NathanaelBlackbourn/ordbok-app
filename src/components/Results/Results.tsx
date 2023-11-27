import styles from './Results.module.scss';

import { WordData } from 'src/types/response';

interface Props {
    results: WordData[];
}

const Results = ({ results }: Props) => {
    return (
        <div data-testid="results">
            <ul className={styles.listParent}>
                {results.map(({ word }, i) => (
                    <li key={i} className={styles.listItem}>
                        {word}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
