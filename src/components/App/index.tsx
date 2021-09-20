import { ApolloProvider } from '@apollo/client';
import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Loading from 'components/Loading';
import client from 'config/api';

import ROUTES from './routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          <Switch>
            {ROUTES.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </ApolloProvider>
  );
}

export default App;
