'use client'

import styles from './PublicationsSection.module.scss';
import { useFilter, useSearch } from '@/hooks';
import { SectionBadge } from '@/components/badges';
import { useEffect } from 'react';
import { PiBookOpenTextFill } from 'react-icons/pi'
import { PublicationCard } from '@/components/cards';
import { publicationsData } from '../../../../data';

// const products = [
//     { id: 1, color: 'red', price: 15, size: 'M', rating: 4.5 },
//     { id: 2, color: 'blue', price: 25, size: 'L', rating: 3.8 },
//     { id: 3, color: 'green', price: 18, size: 'S', rating: 4.9 },
//     { id: 4, color: 'red', price: 45, size: 'XL', rating: 4.0 },
//     { id: 5, color: 'green', price: 22, size: 'L', rating: 3.5 }
// ];

export default function PublicationsSection() {
    const {
        data, setData, filteredData, filterData, removeFilter, clearAllFilters, activeFilters
    } = useFilter();

    const { query, setQuery, results } = useSearch(filteredData);

    useEffect(() => {
        setData(publicationsData);
    }, []);

    function handleFilter() {
        filterData({
            // color: ['red', 'green'],
            date: { start: new Date(2020, 0), end: new Date(2022, 2) },
        });
    }

    useEffect(() => {
        console.log('activeFilters', activeFilters);
        console.log('filteredData', filteredData);
    }, [activeFilters, filteredData]);

    return (
        <div className={styles.publicationsSection}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    <SectionBadge><PiBookOpenTextFill />Publications</SectionBadge>
                </div>
                <div className={styles.title}>
                    Research at OSSTEC
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <div className={styles.filterPane}>
                        <button
                            onClick={handleFilter}
                        >Apply Filters
                        </button>
                        <div>
                            Showing {filteredData.length} of {data.length} publications
                        </div>
                    </div>
                </div>
                <div className={styles.contentBody}>
                    {filteredData.map((itemData, index) => {
                        return (
                            <PublicationCard
                                key={index}
                                {...itemData}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}