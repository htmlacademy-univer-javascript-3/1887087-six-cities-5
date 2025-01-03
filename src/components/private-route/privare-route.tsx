import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Navigate} from 'react-router-dom';
import {PropsWithChildren} from 'react';
import {useAppSelector} from '../../store/hooks.ts';
import {getAuthorizationStatus} from '../../store/user/user.selectors.ts';

export function PrivateRoute(props: PropsWithChildren) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Login}></Navigate>
  );
}
