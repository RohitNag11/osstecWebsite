'use client'
import styles from './SearchBar.module.scss'
import { useState, useRef, useEffect } from 'react';
import { PiMagnifyingGlassBold, PiXBold } from 'react-icons/pi';

function SearchBar({ placeholder = 'Search...', setQuery, forceClear = false, setForceClear }) {

    const inputRef = useRef(null)
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setMessage(e.target.value);
        setQuery(e.target.value);
    };

    const handleClear = e => {
        setMessage('');
        setQuery('');
    };

    useEffect(() => {
        if (forceClear) {
            setMessage('');
            setQuery('');
            setForceClear(false);
        }
    }, [forceClear, setMessage, setQuery, setForceClear]);

    return (
        <div className={[styles.searchBar, message ? styles.active : ''].join(' ')}>
            <div className={styles.icon}>
                <PiMagnifyingGlassBold />
            </div>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                value={message}
                placeholder={placeholder} />
            <div onClick={handleClear} className={styles.clearButton}>
                <PiXBold />
            </div>

        </div>
    );
}

export default SearchBar;