import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import paths from './paths';

import App from '.';

jest.mock(
  'pages/Countries',
  () =>
    function Countries() {
      return <span>Countries</span>;
    }
);

test('renders home without error', async () => {
  const history = createMemoryHistory();
  history.push(paths.home);
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  await waitFor(() => expect(screen.getByText('Countries')).toBeInTheDocument());
});
