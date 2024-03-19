import { Link } from 'react-router-dom';
import { selectUser } from '../../../../entities/User';
import { SignOutButton } from '../../../../features/SignOut';
import { useAppSelector } from '../../../../shared/model/hooks';
import { ROUTE_NAMES } from '../../../../shared/router/routeNames';
import styles from './Header.module.scss';

export const Header = () => {
  const user = useAppSelector(selectUser);
  const path = location.pathname;
  const hideHeader = path === ROUTE_NAMES.LOGIN || path === ROUTE_NAMES.SIGNUP;

  const isAuth = user.isAuth;

  if (hideHeader) {
    return null;
  }

  if (!isAuth) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <Link className={styles.link} to={ROUTE_NAMES.HOME}>
          Home
        </Link>
        <Link className={styles.link} to={ROUTE_NAMES.PAINTER}>
          Painter
        </Link>
        <SignOutButton />
      </div>
    </>
  );
};
