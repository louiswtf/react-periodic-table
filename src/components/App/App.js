import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Controls from '../Controls/Controls';
import PeriodicTable from '../PeriodicTable/PeriodicTable';

import {StoreContext, initialFilterState} from '../../store/StoreContext';

const App = () => {

    const [loading, setLoading] = useState(true);
    const [elements, setElements] = useState([]);
    const [filters, setFilters] = useState({...initialFilterState});

    const resetFilters = () => setFilters({...initialFilterState});
    const setPeriod = (period) => setFilters({...initialFilterState, period});
    const setTemperature = (temperature) => setFilters({...initialFilterState, temperature});
    const setCategory = (category) => setFilters({...initialFilterState, category});
    const setElement = (element) => setFilters({...initialFilterState, element});

    useEffect(() => {

        axios.get('/elements.json').then(response => {
            setElements(response.data.elements);
            setLoading(false);
        });

    }, []);

    if (loading) return 'Loading...';

    return (
        <StoreContext.Provider value={{
            elements,
            ...filters,
            setPeriod,
            setTemperature,
            setCategory,
            setElement,
            resetFilters
        }}>
            <div className="app">
                <Controls />
                <PeriodicTable />
            </div>
        </StoreContext.Provider>
    );

};

export default App;
