/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

import PATHS from './paths';

const Countries = lazy(() => import('pages/Countries'));
const CountryDetail = lazy(() => import('pages/CountryDetail'));

export default [
  {
    exact: true,
    path: PATHS.countryDetail,
    component: CountryDetail
  },
  {
    exact: false,
    path: PATHS.home,
    component: Countries
  }
];
