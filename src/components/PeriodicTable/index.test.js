import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './';
import data from "../../../data/elements.json";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PeriodicTable elements={data.elements} />, div);
});

const expectedElements = 118;
test('Data contains ' + expectedElements + ' elements of the periodic table', () => {
    const elements = data.elements;
    expect(elements.length).toBe(expectedElements);
});
