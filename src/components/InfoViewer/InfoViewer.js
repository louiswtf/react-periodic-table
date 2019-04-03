import React, { useContext } from 'react';

import {StoreContext} from "../../store/StoreContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCube, faCloud, faTint} from "@fortawesome/free-solid-svg-icons";


const InfoViewer = () => {
    const store = useContext(StoreContext);

    let classes = ['info'];
    let html = <div className="inner"></div>;
    let displayTemp = {
        k: Math.round(store.temperature),
        c: Math.round(store.temperature - 273),
        f: Math.round((store.temperature - 273) * (9/5) + 32)
    };
    if (store.element !== null) {
        classes.push('active');
        html = (
            <div className="inner">
                <h3>{store.element.name}</h3>
                <p>{store.element.summary.split(' ').slice(0, 30).join(' ')}...</p>
                <p>Read more at <a href={store.element.source} target="_blank">Wikipedia</a></p>
            </div>
        );
    }
    if (store.temperature !== null) {
        classes.push('active');
        html = (
            <div className="inner">
                <div className="key">
                    <div className="temp-key solid">
                        <div className="icon"><FontAwesomeIcon icon={faCube} /></div>
                        <div className="label">Solid</div>
                    </div>
                    <div className="temp-key liquid">
                        <div className="icon"><FontAwesomeIcon icon={faTint} /></div>
                        <div className="label">Liquid</div>
                    </div>
                    <div className="temp-key gas">
                        <div className="icon"><FontAwesomeIcon icon={faCloud} /></div>
                        <div className="label">Gas</div>
                    </div>
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
};

export default InfoViewer;
