import React, { Component } from 'react';


class Controls extends Component {

    constructor(props) {
        super(props);
        this.handleFilterPeriod = this.handleFilterPeriod.bind(this);
        this.handleFilterTemperature = this.handleFilterTemperature.bind(this);
        this.handleFilterCategory = this.handleFilterCategory.bind(this);
        this.handleClearFilters = this.handleClearFilters.bind(this);
    }

    handleFilterPeriod(e) {
        this.props.onFilterPeriod(e.target.value);
    }

    handleFilterTemperature(e) {
        this.props.onFilterTemperature(e.target.value);
    }

    handleFilterCategory(e) {
        this.props.onFilterCategory(e.target.getAttribute("data-category"));
    }

    handleClearFilters(e) {
        this.props.onClearFilters();
    }

    render() {
        const periods = [1,2,3,4,5,6,7];
        let i = 0;
        let periodButtons = periods.map((period) => {
            let buttonKey = 'periodbutton' + i++;
            return <button key={buttonKey} value={period} onClick={this.handleFilterPeriod}>{period}</button>
        });
        let tempValue = 0;
        if (this.props.filterTemperature !== null) {
            tempValue = this.props.filterTemperature;
        }
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
        let categoriesItems = elementsCategories.map((item) => {
            let className = 'item ' + item.category;
            if (this.props.filterCategory === item.category) className += ' active';
            return <div key={'element-key-' + item.category} data-category={item.category} className={className} onClick={this.handleFilterCategory}>{item.name}</div>
        });
        return (
            <div className="controls">
                <h2>Options</h2>
                <div className="controls-section">
                    <h3>Periods</h3>
                    {periodButtons}
                </div>
                <div className="controls-section">
                    <h3>Temperature</h3>
                    <input type="range" min="0" max="6000" value={tempValue} onChange={this.handleFilterTemperature} />
                </div>
                <div className="controls-section">
                    <h3>Categories</h3>
                    <div className="categories">
                        {categoriesItems}
                    </div>
                </div>
                <div className="controls-section">
                    <h3>Reset</h3>
                    <button onClick={this.handleClearFilters}>Clear Filters</button>
                </div>
            </div>
        );
    }
}

export default Controls;
