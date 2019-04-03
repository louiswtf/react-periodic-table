import React from 'react';

const Spacer = ({clear}) => {
    let classes = ['spacer'];
    if (clear) classes.push('clear');
    return (
        <div className={classes.join(' ')}>
            <div className="aspect-ratio"></div>
            <div className="inner"></div>
        </div>
    );
};

export default Spacer;
