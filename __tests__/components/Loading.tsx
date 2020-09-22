import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../../src/components/Loading';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<Loading />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
