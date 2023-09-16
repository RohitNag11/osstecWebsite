import { useState, useEffect } from 'react';

export default function useSearch(filteredData = []) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(filteredData);

    useEffect(() => {
        if (query.trim() === '') {
            setResults(filteredData);
            return;
        }

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const filtered = filteredData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
            (item.date && (item.date.getFullYear().toString().includes(query.toLowerCase()) || (months[item.date.getMonth()].toLowerCase()).includes(query.toLowerCase())))
        );
        setResults(filtered);
    }, [query, filteredData]);

    return {
        query,
        setQuery,
        results
    };
}