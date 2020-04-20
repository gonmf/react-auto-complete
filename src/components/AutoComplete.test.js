import React from 'react';
import { render } from '@testing-library/react';
import AutoComplete from './AutoComplete';

test('renders form', () => {
  const { getByText } = render(<AutoComplete />);
  const elem = getByText(/Name Search/i);
  expect(elem).toBeInTheDocument();
});
