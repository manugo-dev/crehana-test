import i18next from 'i18next';

i18next.addResources('en', 'Global', {
  serverError: 'Something went wrong',
  noData: 'No info found',
  goHome: 'Go to home'
});

i18next.addResources('en', 'Countries', {
  title: 'Countries',
  searchPlaceholder: 'Search by code...',
  continentsPlaceholder: 'Filter by Continent',
  currenciesPlaceholder: 'Filter by Currency'
});

i18next.addResources('en', 'CountryDetail', {
  capital: 'Capital',
  continent: 'Continent',
  languages: 'Languages',
  currency: 'Currency'
});
