import { useState, useEffect } from 'react';

export default function useFilter() {
    const [data, setData] = useState([]);
    const [activeFilters, setActiveFilters] = useState({});
    const [filteredData, setFilteredData] = useState([]);

    const filterData = (newFilters) => {
        // Merge active filters with new ones
        const combinedFilters = { ...activeFilters, ...newFilters };
        setActiveFilters(combinedFilters);
    };

    const removeFilter = (filterKey) => {
        const updatedFilters = { ...activeFilters };
        delete updatedFilters[filterKey];
        setActiveFilters(updatedFilters);
    };

    const clearAllFilters = () => {
        setActiveFilters({});
    };

    useEffect(() => {
        let filteredData = [...data];

        // Iterate through each active filter
        for (let filterKey in activeFilters) {
            const filterValue = activeFilters[filterKey];

            // If the filterValue is an array, we assume the user wants any of the values in the array
            if (Array.isArray(filterValue)) {
                filteredData = filteredData.filter(item => filterValue.includes(item[filterKey]));
            }
            // If the filterValue is an object, we assume the user wants a range (like for dates, prices, etc.)
            else if (typeof filterValue === 'object') {
                filteredData = filteredData.filter(item =>
                    item[filterKey] >= filterValue.start &&
                    (filterValue.end ? item[filterKey] <= filterValue.end : true)
                );
            }
            // Direct comparison
            else {
                filteredData = filteredData.filter(item => item[filterKey] === filterValue);
            }
        }

        setFilteredData(filteredData);
    }, [activeFilters, data]);

    return {
        data,
        setData,
        filteredData,
        filterData,
        removeFilter,
        clearAllFilters,
        activeFilters
    };
}