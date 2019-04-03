import React, { useContext } from 'react';

import {StoreContext} from "../../store/StoreContext";


const Element = props => {
    const store = useContext(StoreContext);

    let classes = ['element'];
    const elementFilterCategory = (props.category.indexOf('unknown') === -1) ? props.category.replace(/ /g, '-') : 'unknown';
    if (props.clear) classes.push('clear');
    classes.push('period-' + store.period);
    classes.push((props.category.indexOf('unknown') === -1) ? props.category.replace(/ /g, '-') : 'unknown');
    if (store.element !== null) {
        if (store.element.name !== props.name) {
            classes.push('fade');
        }
    }
    if (store.period !== null) {
        if (Number(props.period) !== Number(store.period)) {
            classes.push('fade');
        }
    }
    if (store.category !== null) {
        if (elementFilterCategory !== store.category) {
            classes.push('fade');
        }
    }
    if (store.temperature !== null) {
        let state = 'solid';
        if (props.melt !== null && (store.temperature >= Number(props.melt))) {
            state = 'liquid';
            if (props.boil === null) state = 'unknown';
        }
        if (props.boil !== null && (store.temperature >= Number(props.boil))) state = 'gas';
        if (props.melt === null && props.boil === null) state = 'unknown';
        classes.push('state-' + state);
    }
    return (
        <div className={classes.join(' ')} title={props.name} onClick={() => store.setElement({...props})}>
            <div className="aspect-ratio"></div>
            <div className="inner">
                <div className="element-symbol">{props.symbol}</div>
                <div className="element-number">{props.number}</div>
            </div>
        </div>
    );
};


export default Element;
