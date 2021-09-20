import { MockedProvider } from '@apollo/client/testing';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router-dom';

import paths from 'components/App/paths';
import mocks from 'graphql/mocks';

import CountryDetail from './index';

describe('#CountryDetail', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    const route = paths.countryDetail.replace(':id', 'CO');
    history.push(route);

    render(
      <Router history={history}>
        <Route path={paths.countryDetail}>
          <MockedProvider mocks={mocks}>
            <CountryDetail />
          </MockedProvider>
        </Route>
      </Router>
    );
  });

  it('It must got all country info and show to the user', async () => {
    await waitFor(() => expect(screen.getByText(/Colombia/)).toBeInTheDocument());
    expect(screen.getByText(/Bogotá/)).toBeInTheDocument();
    expect(screen.getByText(/COP/)).toBeInTheDocument();
    expect(screen.getByText(/South America/)).toBeInTheDocument();
    expect(screen.getByText(/Spanish/)).toBeInTheDocument();
  });

  it('It must redirect to home when user press go home button', async () => {
    userEvent.click(screen.getByText(/Global:goHome/));
    expect(history.location.pathname).toBe(paths.home);
  });
});
