import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
const fetchMock = require('fetch-mock');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


  it('can fetch data', async () => {
    fetchMock.mock('https://api.punkapi.com/v2/beers', 200);
    const res = await fetch('https://api.punkapi.com/v2/beers');
    expect(res.ok);
    fetchMock.restore();
  });

