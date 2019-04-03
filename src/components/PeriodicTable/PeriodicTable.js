import React, { useContext } from 'react';

import {StoreContext} from "../../store/StoreContext";

import InfoViewer from '../InfoViewer/InfoViewer';
import Element from '../Element/Element';
import Spacer from '../Spacer/Spacer';


const elementGrid = (elements) => {

    const gridSize = [18,10];
    let returnElements = [];

    for (let y = 1; y <= gridSize[1]; y++) {
        for (let x = 1; x <= gridSize[0]; x++) {
            returnElements.push(elements.find(element => (element.xpos === x && element.ypos === y)));
        }
    }

    returnElements = returnElements.map((element, i) => {
        let clear = (i % 18 === 0);
        if (element === undefined) {
            return (<Spacer key={'element' + i} clear={clear} />);
        } else {
            if (element.ypos > 7 && i === 3) clear = true;
            return (
                <Element
                    key={'element' + i}
                    clear={clear}
                    {...element}
                />
            );
        }
    });

    return returnElements;
};


const PeriodicTable = props => {
    const store = useContext(StoreContext);

    return (
        <div className="periodic-table">
            <InfoViewer />
            {elementGrid(store.elements)}
        </div>
    );
};

export default PeriodicTable;
