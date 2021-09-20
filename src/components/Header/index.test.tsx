import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import paths from 'components/App/paths';

import Header from './index';

describe('#Header', () => {
  const history = createMemoryHistory({ initialEntries: ['/demoEntry'] });

  beforeEach(() => {
    render(
      <Router history={history}>
        <Header />
      </Router>
    );
  });

  it('It must render page title', () => {
    expect(screen.getByText('Crehana Frontend Test')).toBeInTheDocument();
  });

  it('It must redirect to home page when user click on title', async () => {
    userEvent.click(screen.getByText('Crehana Frontend Test'));
    expect(history.location.pathname).toBe(paths.home);
  });
});
