import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import paths from 'components/App/paths';
import Loading from 'components/Loading';
import { GET_COUNTRY } from 'graphql/queries/getCountry';
import { CountriesDetail } from 'types/Countries';

import styles from './styles.module.scss';

function CountryDetail() {
  const { t } = useTranslation('CountryDetail');
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<CountriesDetail>(GET_COUNTRY, {
    variables: { code: id }
  });

  return (
    <section className={styles.page}>
      {loading && <Loading />}
      {!loading && error && <span className="text center">{t('Global:serverError')}</span>}
      {data?.countries[0] && (
        <>
          <h1 className="m-bottom-2">
            {data?.countries[0].name} ({data?.countries[0].code})
          </h1>
          <h3 className="subtitle m-top-0 m-bottom-1">{t('capital')}</h3>
          <p className="text m-top-0 m-bottom-3">{data?.countries[0].capital}</p>
          <h4 className="subtitle m-top-0 m-bottom-1">{t('currency')}</h4>
          <p className="text m-top-0 m-bottom-3">{data?.countries[0].currency}</p>
          <h4 className="subtitle m-top-0 m-bottom-1">{t('continent')}</h4>
          <p className="text m-top-0 m-bottom-3">
            {data?.countries[0].continent?.name} ({data?.countries[0].continent?.name})
          </p>
          <div className="m-bottom-10">
            <p className="subtitle">{t('languages')}:</p>
            <ul>
              {data?.countries[0].languages?.map(({ name, code }) => (
                <li key={code}>
                  {name} ({code})
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {!loading && !error && !data?.countries.length && <h1 className="m-bottom-2">{t('Global:noData')}</h1>}
      <Link to={paths.home} className="button primary">
        {t('Global:goHome')}
      </Link>
    </section>
  );
}

export default CountryDetail;
