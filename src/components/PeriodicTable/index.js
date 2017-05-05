import React, { Component } from 'react';

class Element extends Component {
    render() {
        let classes = ['element'];
        if (this.props.clear) classes.push('clear');
        if (this.props.blank) {
            classes.push('blank');
            return (
                <div className={classes.join(' ')}></div>
            );
        } else {
            classes.push('period-' + this.props.period);
            classes.push((this.props.category.indexOf('unknown') === -1) ? this.props.category.replace(/ /g, '-') : 'unknown');
            return (
                <div className={classes.join(' ')} title={this.props.name}>
                    <div className="inner">
                        <div className="element-symbol">{this.props.symbol}</div>
                        <div className="element-number">{this.props.number}</div>
                    </div>
                </div>
            );
        }
    }
}

Element.defaultProps = {
    blank: false
}

class Spacer extends Component {
    render() {
        let classes = ['spacer'];
        if (this.props.clear) classes.push('clear');
        return (
            <div className={classes.join(' ')}></div>
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

        let elementComponents = elements.map((element) => {
            let key = 'element-' + e++;
            let clear = ((e - 1) % 18 === 0);
            if (element === undefined) {
                return (<Spacer key={key} clear={clear} />);
            } else {
                if (element.ypos > 7 && e === 3) clear = true;
                return (<Element key={key} clear={clear} {...element} />);
            }
        });

        return (
            <div className="periodic-table">
                {elementComponents}
            </div>
        );
    }
}

export default PeriodicTable;
