import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Navigate} from 'react-router-dom';
import {PropsWithChildren} from 'react';
import {useAppSelector} from '../../store/hooks.ts';

export function PrivateRoute(props: PropsWithChildren) {
  const authorizationStatus = useAppSelector((state) => state.AuthorizationStatus);

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Login}></Navigate>
  );
}
