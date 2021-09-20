import cn from 'clsx';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';
import paths from 'components/App/paths';

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={cn('row middle center', styles.header)}>
      <Logo className={cn('m-right-2', styles.logo)} />
      <Link to={paths.home} className={cn('header-title white', styles.title)}>
        Crehana Frontend Test
      </Link>
    </header>
  );
}

export default Header;
