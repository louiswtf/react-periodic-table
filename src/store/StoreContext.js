import React from 'react';

export const initialFilterState = {
    period: null,
    temperature: null,
    category: null,
    element: null
};

export const StoreContext = React.createContext({
    ...initialFilterState,
    elements: []
});
