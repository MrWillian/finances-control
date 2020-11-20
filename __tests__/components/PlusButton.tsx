import React from 'react';
import renderer from 'react-test-renderer';

import PlusButton from '../../src/components/PlusButton';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<PlusButton onPress={() => {}} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
