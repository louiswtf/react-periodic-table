import React, { useContext } from 'react';

import {StoreContext} from "../../store/StoreContext";


const Controls = () => {
    const store = useContext(StoreContext);
    const periods = [1, 2, 3, 4, 5, 6, 7];
    const elementsCategories = [
        {
            name: 'Actinide',
            category: 'actinide'
        },
        {
            name: 'Alkali Metal',
            category: 'alkali-metal'
        },
        {
            name: 'Alkaline Earth Metal',
            category: 'alkaline-earth-metal'
        },
        {
            name: 'Diatomic Non-Metal',
            category: 'diatomic-nonmetal'
        },
        {
            name: 'Lanthanide',
            category: 'lanthanide'
        },
        {
            name: 'Metalloid',
            category: 'metalloid'
        },
        {
            name: 'Noble Gas',
            category: 'noble-gas'
        },
        {
            name: 'Polyatomic Non-Metal',
            category: 'polyatomic-nonmetal'
        },
        {
            name: 'Post-Transition Metal',
            category: 'post-transition-metal'
        },
        {
            name: 'Transition Metal',
            category: 'transition-metal'
        },
        {
            name: 'Unknown',
            category: 'unknown'
        }
    ];

    return (
        <div className="controls">
            <h2>Options</h2>
            <div className="controls-section">
                <h3>Periods</h3>
                {
                    periods.map((period, i) => <button key={'periodbutton' + i} value={period} onClick={() => store.setPeriod(period)}>{period}</button>)
                }
            </div>
            <div className="controls-section">
                <h3>Temperature</h3>
                <input type="range" min="0" max="6000" value={store.temperature !== null ? store.temperature : 0} onChange={(e) => store.setTemperature(e.target.value)} />
            </div>
            <div className="controls-section">
                <h3>Categories</h3>
                <div className="categories">
                    {
                        elementsCategories.map((item, i) => (
                            <div
                                key={'category' + i}
                                data-category={item.category}
                                className={`item ${item.category} ${store.category === item.category ? 'active' : ''}`}
                                onClick={() => store.setCategory(item.category)}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="controls-section">
                <h3>Reset</h3>
                <button onClick={store.resetFilters}>Clear Filters</button>
            </div>
        </div>
    );
};


export default Controls;
