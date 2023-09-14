'use client'

import styles from './PublicationsSection.module.scss';
import { useFilter, useSearch } from '@/hooks';
import { useEffect, useState } from 'react';
import { PiBookOpenTextFill } from 'react-icons/pi';
import { SectionBadge } from '@/components/badges';
import { PublicationCard } from '@/components/cards';
import { publicationsData } from '../../../../data';
import { SearchBar } from '@/components/inputs';

export default function PublicationsSection() {
    const {
        data,
        setData,
        filteredData,
        filterData,
        removeFilter
    } = useFilter();

    const { query, setQuery, results } = useSearch(filteredData); // Operating on filteredData

    // States for date range
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        setData(publicationsData);
    }, []);

    // Update activeFilters based on date range changes
    useEffect(() => {
        const dateFilter = {};
        if (startDate) dateFilter.start = new Date(startDate);
        if (endDate) dateFilter.end = new Date(endDate);

        if (startDate || endDate) {
            filterData({ date: dateFilter });
        } else {
            removeFilter('date');
        }
    }, [startDate, endDate]);

    return (
        <div className={styles.publicationsSection}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    <SectionBadge><PiBookOpenTextFill />Publications</SectionBadge>
                </div>
                <div className={styles.title}>
                    Research at OSSTEC
                </div>
                <div className={styles.description}>
                    Years of groundbreaking research at Imperial College London led to the development of the technology driving OSSTEC. Further research studies support the development of the innovative implants we have designed. Explore our publications below.
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <div className={styles.filterPane}>
                        {/* Search bar */}
                        {/* <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className={styles.searchBar}
                            placeholder="Search publications..."
                        /> */}
                        <SearchBar setQuery={setQuery} placeholder='Search publications...' />
                        {/* Date range selector */}
                        {/* <div>
                            <input
                                type="date"
                                value={startDate || ''}
                                onChange={e => setStartDate(e.target.value)}
                                placeholder="Start Date"
                            />
                            <input
                                type="date"
                                value={endDate || ''}
                                onChange={e => setEndDate(e.target.value)}
                                placeholder="End Date"
                            />
                        </div> */}
                        <div className={styles.count}>
                            Showing {results.length} of {data.length} publications
                        </div>
                    </div>
                </div>
                <div className={styles.contentBody}>
                    {results.map((itemData, index) => {
                        return (
                            <PublicationCard
                                key={index}
                                {...itemData}
                            />
                        );
                    })}
                    <div className={[styles.noResults, results.length == 0 && styles.visible].join(' ')}>
                        No results found. Please try another search or <span className={styles.clearButton} onClick={
                            () => {
                                setQuery('');
                                setStartDate(null);
                                setEndDate(null);
                            }
                        }>
                            reset
                        </span> all filters.
                    </div>
                </div>
            </div>
        </div>
    );
}