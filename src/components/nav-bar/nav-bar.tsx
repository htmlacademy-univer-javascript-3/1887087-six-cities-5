import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../store/hooks.ts';


export function NavBar(){
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.UserInfo);
  const authorizationStatus = useAppSelector((state) => state.AuthorizationStatus);

  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active" onClick={() => navigate(AppRoute.Main)}>
            <img className="header__logo" src="public/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {authorizationStatus === AuthorizationStatus.Auth &&
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userInfo?.email}</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>}
            {authorizationStatus === AuthorizationStatus.Auth &&
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>}
            {authorizationStatus !== AuthorizationStatus.Auth &&
              <li className="header__nav-item">
                <a className="header__nav-link" onClick={() => navigate(AppRoute.Login)}>
                  <span className="header__signout">Log in</span>
                </a>
              </li>}
          </ul>
        </nav>
      </div>
    </div>
  );
}
