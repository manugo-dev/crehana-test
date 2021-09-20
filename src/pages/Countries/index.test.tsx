import { MockedProvider } from '@apollo/client/testing';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import paths from 'components/App/paths';
import mocks from 'graphql/mocks';

import Countries from './index';

describe('#Countries', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <MockedProvider mocks={mocks}>
          <Countries />
        </MockedProvider>
      </Router>
    );
  });

  it('It must render page title', () => {
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('It must show the country list from api', async () => {
    await waitFor(() => expect(screen.getByText(/Andorra/)).toBeInTheDocument());
    expect(screen.getByText(/United Arab Emirates/)).toBeInTheDocument();
    expect(screen.getByText(/Afghanistan/)).toBeInTheDocument();
    expect(screen.getByText(/Antigua and Barbuda/)).toBeInTheDocument();
  });

  it('It must show the searched country from searchbar country code', async () => {
    userEvent.type(screen.getByPlaceholderText('searchPlaceholder'), 'CO');
    await waitFor(() => expect(screen.getByText(/Colombia/)).toBeInTheDocument());
  });

  it('It must redirect to the country detail page on click on it button', async () => {
    await waitFor(() => expect(screen.getByText(/Andorra/)).toBeInTheDocument());
    userEvent.click(screen.getByText(/Andorra/));
    expect(history.location.pathname).toBe(paths.countryDetail.replace(':id', 'AD'));
  });

  it('It must show all continents available to filter when users click continent selector', async () => {
    await waitFor(() => expect(screen.getByText(/Andorra/)).toBeInTheDocument());
    userEvent.click(screen.getByText('continentsPlaceholder'));
    ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'].forEach(
      (continent) => {
        expect(
          screen
            .getAllByText(continent)
            .filter((element) => element.className.includes('react-select__option'))[0]
        ).toBeInTheDocument();
      }
    );
  });
});
