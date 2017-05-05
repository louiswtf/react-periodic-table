import React, { Component } from 'react';

import periodic_table from "../../../data/elements.min.json";
import PeriodicTable from '../PeriodicTable';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            elements: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState( { elements:periodic_table.elements, isLoading: false } );
    }

    render() {
        return (
            <div>
                <PeriodicTable elements={this.state.elements} />
            </div>
        );
    }
}

export default App;
