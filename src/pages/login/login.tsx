import {Helmet} from 'react-helmet-async';
import {AppName, AppRoute, AuthorizationStatus} from '../../consts.ts';
import {LoginForm} from '../../components/login-form/login-form.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {getAuthorizationStatus} from '../../store/user/user.selectors.ts';
import {Navigate} from 'react-router-dom';

export function Login() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      <Navigate to={AppRoute.Main}/> :
      <div className="page page--gray page--login">
        <Helmet>
          <title>{AppName}. Login</title>
        </Helmet>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="">
                  <img
                    className="header__logo"
                    src="public/img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginForm/>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}
