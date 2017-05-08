import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls />, div);
});
