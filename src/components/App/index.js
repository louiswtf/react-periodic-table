import React, { Component } from 'react';

import data from "../../../data/elements.json";
import Controls from '../Controls';
import PeriodicTable from '../PeriodicTable';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            elements: [],
            isLoading: true,
            filterPeriod: null,
            filterTemperature: null,
            filterCategory: null,
            elementSelection: null
        };
        this.handleFilterPeriod = this.handleFilterPeriod.bind(this);
        this.handleFilterTemperature = this.handleFilterTemperature.bind(this);
        this.handleElementSelection = this.handleElementSelection.bind(this);
        this.handleFilterCategory = this.handleFilterCategory.bind(this);
        this.handleClearFilters = this.resetFilters.bind(this);
    }

    resetFilters() {
        this.setState({
            filterPeriod: null,
            filterTemperature: null,
            filterCategory: null,
            elementSelection: null
        });
    }

    handleFilterPeriod(filterPeriod) {
        this.resetFilters();
        this.setState({
            filterPeriod: (filterPeriod === this.state.filterPeriod) ? null : filterPeriod
        });
    }

    handleFilterTemperature(filterTemperature) {
        this.resetFilters();
        this.setState({
            filterTemperature: filterTemperature
        });
    }

    handleElementSelection(elementSelection) {
        this.resetFilters();
        this.setState({
            elementSelection: elementSelection
        });
    }

    handleFilterCategory(filterCategory) {
        this.resetFilters();
        this.setState({
            filterCategory: filterCategory
        });
    }

    componentDidMount() {
        this.setState({
            elements: data.elements,
            isLoading: false
        });
    }

    render() {
        return (
            <div className="app">
                <Controls
                    filterPeriod={this.state.filterPeriod}
                    filterTemperature={this.state.filterTemperature}
                    filterCategory={this.state.filterCategory}
                    onFilterPeriod={this.handleFilterPeriod}
                    onFilterTemperature={this.handleFilterTemperature}
                    onFilterCategory={this.handleFilterCategory}
                    onClearFilters={this.handleClearFilters}
                />
                <PeriodicTable
                    elements={this.state.elements}
                    elementSelection={this.state.elementSelection}
                    filterPeriod={this.state.filterPeriod}
                    filterTemperature={this.state.filterTemperature}
                    filterCategory={this.state.filterCategory}
                    onElementSelection={this.handleElementSelection}
                />
            </div>
        );
    }
}

export default App;
