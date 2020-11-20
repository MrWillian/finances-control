import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../src/components/Header';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<Header />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
