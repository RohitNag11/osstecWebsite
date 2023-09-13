import { useState, useEffect } from 'react';

export default function useSearch(initialData = []) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(initialData);

    useEffect(() => {
        if (query.trim() === '') {
            setResults(initialData);
            return;
        }

        const filtered = initialData.filter(item =>
            item.title.includes(query) || item.description.includes(query)
        );
        setResults(filtered);
    }, [query, initialData]);

    return {
        query,
        setQuery,
        results
    };
}