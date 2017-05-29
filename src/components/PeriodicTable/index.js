import React, { Component } from 'react';

class Element extends Component {

    constructor(props) {
        super(props);
        this.handleElementSelection = this.handleElementSelection.bind(this);
    }

    handleElementSelection(e) {
        this.props.handleElementSelection(this.props);
    }

    render() {
        let classes = ['element'];
        const elementFilterCategory = (this.props.category.indexOf('unknown') === -1) ? this.props.category.replace(/ /g, '-') : 'unknown';
        if (this.props.clear) classes.push('clear');
        classes.push('period-' + this.props.period);
        classes.push((this.props.category.indexOf('unknown') === -1) ? this.props.category.replace(/ /g, '-') : 'unknown');
        if (this.props.elementSelection !== null) {
            if (this.props.elementSelection.name !== this.props.name) {
                classes.push('fade');
            }
        }
        if (this.props.filterPeriod !== null) {
            if (Number(this.props.period) !== Number(this.props.filterPeriod)) {
                classes.push('fade');
            }
        }
        if (this.props.filterCategory !== null) {
            if (elementFilterCategory !== this.props.filterCategory) {
                classes.push('fade');
            }
        }
        if (this.props.filterTemperature !== null) {
            let state = 'solid';
            if (this.props.melt !== null && (this.props.filterTemperature >= Number(this.props.melt))) {
                state = 'liquid';
                if (this.props.boil === null) state = 'unknown';
            }
            if (this.props.boil !== null && (this.props.filterTemperature >= Number(this.props.boil))) state = 'gas';
            if (this.props.melt === null && this.props.boil === null) state = 'unknown';
            classes.push('state-' + state);
        }
        return (
            <div className={classes.join(' ')} title={this.props.name} onClick={this.handleElementSelection}>
                <div className="aspect-ratio"></div>
                <div className="inner">
                    <div className="element-symbol">{this.props.symbol}</div>
                    <div className="element-number">{this.props.number}</div>
                </div>
            </div>
        );
    }
}

class Spacer extends Component {
    render() {
        let classes = ['spacer'];
        if (this.props.clear) classes.push('clear');
        return (
            <div className={classes.join(' ')}>
                <div className="aspect-ratio"></div>
                <div className="inner"></div>
            </div>
        );
    }
}

class InfoViewer extends Component {
    render() {
        let classes = ['info'];
        let html = <div className="inner"></div>;
        let displayTemp = {
            k: Math.round(this.props.filterTemperature),
            c: Math.round(this.props.filterTemperature - 273),
            f: Math.round((this.props.filterTemperature - 273) * (9/5) + 32)
        };
        if (this.props.elementSelection !== null) {
            classes.push('active');
            html = (
                <div className="inner">
                    <h3>{this.props.elementSelection.name}</h3>
                    <p>{this.props.elementSelection.summary}</p>
                </div>
            );
        }
        if (this.props.filterTemperature !== null) {
            classes.push('active');
            html = (
                <div className="inner">
                    <div className="key">
                        <div className="temp-key solid">Solid</div>
                        <div className="temp-key liquid">Liquid</div>
                        <div className="temp-key gas">Gas</div>
                    </div>
                    <div className="grid-3">
                        <div className="col">
                            {displayTemp.k} K
                        </div>
                        <div className="col">
                            {displayTemp.c} &deg;C
                        </div>
                        <div className="col">
                            {displayTemp.f} &deg;F
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className={classes.join(' ')}>
                <div className="aspect-ratio"></div>
                {html}
            </div>
        );
    }
}


class PeriodicTable extends Component {

    render() {

        const gridSize = [18,10];
        let elements = [];
        let e = 0;

        for (let y = 1; y <= gridSize[1]; y++) {
            for (let x = 1; x <= gridSize[0]; x++) {
                elements.push(this.props.elements.find((element) => (element.xpos === x && element.ypos === y)));
            }
        }

        let tableSquares = elements.map((element) => {
            let key = 'element-' + e++;
            let clear = ((e - 1) % 18 === 0);
            if (element === undefined) {
                return (<Spacer key={key} clear={clear} />);
            } else {
                if (element.ypos > 7 && e === 3) clear = true;
                return (
                    <Element
                        key={key}
                        clear={clear}
                        {...element}
                        filterPeriod={this.props.filterPeriod}
                        filterTemperature={this.props.filterTemperature}
                        filterCategory={this.props.filterCategory}
                        elementSelection={this.props.elementSelection}
                        handleElementSelection={this.props.onElementSelection}
                    />
                );
            }
        });

        return (
            <div className="periodic-table">
                <InfoViewer elementSelection={this.props.elementSelection} filterTemperature={this.props.filterTemperature} />
                {tableSquares}
            </div>
        );
    }
}

export default PeriodicTable;
