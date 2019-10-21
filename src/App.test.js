import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
const fetchMock = require('fetch-mock');
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';


// Enzyme.configure({ adapter: new Adapter() });

// describe('<App />', () => {
//   let wrapper;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, 'useState')
//   useStateSpy.mockImplementation((init) => [init, setState]);

//   beforeEach(() => {
//     wrapper = Enzyme.shallow(<App />);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('Get Beers', () => {
//     it('calls setBeers', () => {
//       wrapper.find('#count-up').props().onClick();
//       expect(setState).toHaveBeenCalledWith(1);
//     });
//   });

//   // describe('Count Down', () => {
//   //   it('calls setCount with count - 1', () => {
//   //     wrapper.find('#count-down').props().onClick();
//   //     expect(setState).toHaveBeenCalledWith(-1);
//   //   });
//   // });

//   // describe('Zero', () => {
//   //   it('calls setCount with 0', () => {
//   //     wrapper.find('#zero-count').props().onClick();
//   //     expect(setState).toHaveBeenCalledWith(0);
//   //   });
//   // });
// });


  it('can fetch data', async () => {
    fetchMock.mock('https://api.punkapi.com/v2/beers', 200);
    const res = await fetch('https://api.punkapi.com/v2/beers');
    expect(res.ok);
    fetchMock.restore();
  });


