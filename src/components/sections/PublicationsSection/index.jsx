'use client'

import styles from './PublicationsSection.module.scss';
import { useFilter, useSearch } from '@/hooks';
import { useEffect, useState } from 'react';
import { PiBookOpenTextFill, PiCaretDoubleDownBold } from 'react-icons/pi';
import { SectionBadge } from '@/components/badges';
import { PublicationCard } from '@/components/cards';
import { SearchBar } from '@/components/inputs';

export default function PublicationsSection({ publicationsData, id }) {
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
    const [forceClear, setForceClear] = useState(false);

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

    const [resultsToShow, setResultsToShow] = useState(5); // State for results to display

    // Toggles the number of results to show
    const toggleResults = () => {
        if (resultsToShow === 5) {
            setResultsToShow(results.length);
        } else {
            setResultsToShow(5);
        }
    };

    return (
        <div className={styles.publicationsSection} id={id}>
            <div className={styles.badge}>
                <SectionBadge><PiBookOpenTextFill />Publications</SectionBadge>
            </div>
            <div className={styles.header}>
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
                        <SearchBar
                            setQuery={setQuery}
                            placeholder='search publications...'
                            forceClear={forceClear}
                            setForceClear={setForceClear}
                        />
                        <div className={styles.count}>
                            Showing {Math.min(resultsToShow, results.length)} of {results.length} publications
                        </div>
                    </div>
                </div>
                <div className={styles.contentBody}>
                    {((results.sort((a, b) => b.date - a.date)).slice(0, resultsToShow)).map((itemData, index) => {
                        return (
                            <PublicationCard
                                key={index}
                                {...itemData}
                            />
                        );
                    })}
                    <div className={[styles.noResults, results.length === 0 && styles.visible].join(' ')}>
                        No results found. Please try another search or <span className={styles.clearButton} onClick={
                            () => {
                                setQuery('');
                                setStartDate(null);
                                setEndDate(null);
                                setForceClear(true);
                            }
                        }>
                            reset
                        </span> all filters.
                    </div>
                    {results.length > 5 && (
                        <div className={[styles.showMoreResultsContainer, resultsToShow > 5 && styles.active].join(' ')}>
                            <div
                                onClick={toggleResults}
                                className={styles.showMoreResultsButton}
                            >
                                <PiCaretDoubleDownBold
                                    className={styles.icon}
                                />
                                {resultsToShow === 5 ? 'Show all publications' : 'Show fewer publications'}
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}