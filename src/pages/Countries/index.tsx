import { useQuery } from '@apollo/client';
import cn from 'clsx';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import paths from 'components/App/paths';
import Loading from 'components/Loading';
import Search from 'components/Search';
import { GET_ALL_COUNTRIES } from 'graphql/queries/getAllCountries';
import { GET_ALL_FILTERS } from 'graphql/queries/getFilters';
import { CountriesList } from 'types/Countries';
import { ContinentFilter, Filter } from 'types/Filters';

import styles from './styles.module.scss';

function Countries() {
  const { t } = useTranslation('Countries');
  const [search, setSearch] = useState<string | undefined>('');
  const [continent, setContinent] = useState<string | undefined>('');
  const [currency, setCurrency] = useState<string | undefined>('');
  const {
    loading: countriesLoading,
    error: countriesError,
    data: countriesData
  } = useQuery<CountriesList>(GET_ALL_COUNTRIES, {
    variables: { search, continent, currency }
  });

  const { loading: filtersLoading, data: filterData } = useQuery<ContinentFilter>(GET_ALL_FILTERS);

  const currencies = useMemo(() => {
    const currencySet = new Set<string>();
    countriesData?.countries.forEach((country) => {
      if (country.currency?.includes(',')) {
        country.currency.split(',').forEach((subCurrency) => {
          currencySet.add(subCurrency);
        });
      } else if (country.currency) {
        currencySet.add(country.currency);
      }
    });
    return Array.from(currencySet);
  }, [countriesData]);

  return (
    <section className={cn(styles.page)}>
      <div className={cn('row center middle wrap', styles.options)}>
        <Search
          placeholder={t('searchPlaceholder')}
          className={cn('m-right-3 m-bottom-2', styles.search)}
          onChange={(value) => setSearch(value)}
        />
        {!filtersLoading && filterData && filterData.continents && (
          <Select
            isClearable
            placeholder={t('continentsPlaceholder')}
            className={cn('react-select-container m-right-3 m-bottom-2', styles.select)}
            classNamePrefix="react-select"
            onChange={(value) => setContinent(value?.value || '')}
            options={filterData.continents.map((filter: Filter) => ({
              label: filter.name,
              value: filter.code
            }))}
          />
        )}
        {currencies && (
          <Select
            isClearable
            placeholder={t('currenciesPlaceholder')}
            className={cn('react-select-container m-right-3 m-bottom-2', styles.select)}
            classNamePrefix="react-select"
            onChange={(value) => setCurrency(value?.value || '')}
            options={currencies.map((option: string) => ({ label: option, value: option }))}
          />
        )}
      </div>
      <h1 className="title">{t('title')}</h1>
      <div className={styles.countries}>
        {countriesLoading && <Loading />}
        {!countriesLoading && countriesError && (
          <span className="text center">{t('Global:serverError')}</span>
        )}
        {!countriesLoading &&
          countriesData?.countries &&
          countriesData.countries.map(({ code, name }) => (
            <Link
              to={paths.countryDetail.replace(':id', code)}
              key={code}
              className={cn('button grey m-right-2 m-bottom-2', styles.country)}
            >
              {name} ({code})
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Countries;
