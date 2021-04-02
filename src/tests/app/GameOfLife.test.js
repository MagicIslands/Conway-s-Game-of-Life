import React from 'react';
import ReactDOM from 'react-dom';
import GameOfLife from '../../app/GameOfLife';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameOfLife />, div);
  ReactDOM.unmountComponentAtNode(div);
});
