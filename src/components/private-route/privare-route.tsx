import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Navigate} from 'react-router-dom';
import {PropsWithChildren} from 'react';

type PrivateRouteProps = PropsWithChildren & {
  authorizationStatus: AuthorizationStatus;
}

export function PrivateRoute(props: PrivateRouteProps) {
  return(
    props.authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Login}></Navigate>
  );
}
