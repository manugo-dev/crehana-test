import { render } from '@testing-library/react';

import Loading from './index';

describe('#Loading', () => {
  test('It render without errors', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
