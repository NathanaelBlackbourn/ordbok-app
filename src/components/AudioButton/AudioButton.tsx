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
        audio.addEventListener('pause', handleEnded);
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('pause', handleEnded);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    useEffect(() => {
        console.log('audioPlaying', audioPlaying);
    }, [audioPlaying]);

    return (
        <div className={styles.audioContainer}>
            <button
                className={styles.audioButton}
                onClick={() => {
                    audioPlaying
                        ? (audio.pause(), (audio.currentTime = 0))
                        : audio.play();
                    setAudioPlaying(true);
                }}
                data-testid="audio-button"
            >
                {audioPlaying ? (
                    <Stop size={32} weight={'light'} className={styles.icon} />
                ) : (
                    <Play
                        size={32}
                        alt="Play audio"
                        weight={'light'}
                        className={styles.icon}
                    />
                )}
            </button>
        </div>
    );
};

export default AudioButton;
