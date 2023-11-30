import styles from './AudioButton.module.scss';

import { Play, Stop } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

interface Props {
    audio: HTMLAudioElement;
}

const AudioButton = ({ audio }: Props) => {
    const [audioPlaying, setAudioPlaying] = useState(false);

    useEffect(() => {
        if (!audio) return;
        const handleEnded = () => setAudioPlaying(false);
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    return (
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
                    <Play size={32} alt="Play audio" />
                )}
            </button>
        </div>
    );
};

export default AudioButton;
