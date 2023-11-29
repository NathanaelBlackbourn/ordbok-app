import styles from './Heading.module.scss';

const Heading = () => {
    return (
        <h1 className={styles.heading}>
            <span className={styles.heading}>Search </span>
            <span className={styles.heading}>the </span>
            <span className={styles.heading}>Dictionary</span>
        </h1>
    );
};

export default Heading;
