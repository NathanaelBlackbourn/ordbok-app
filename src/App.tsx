// import styles from './App.module.scss'

import { useEffect } from 'react';
import fetchWords from './utils/fetchWords';

function App() {
    useEffect(() => {
        fetchWords('test').then(console.log);
    });

    return <></>;
}

export default App;
