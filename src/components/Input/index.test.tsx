import { screen, render } from '@testing-library/react';

import Input from './index';

describe('#Input', () => {
  test('It render without errors', () => {
    render(<Input placeholder="testPlaceholder" />);
    expect(screen.getByPlaceholderText('testPlaceholder')).toBeInTheDocument();
  });
});
