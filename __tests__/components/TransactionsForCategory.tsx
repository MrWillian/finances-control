import React from 'react';
import renderer from 'react-test-renderer';

import TransactionsForCategory from '../../src/components/TransactionsForCategory';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<TransactionsForCategory />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
