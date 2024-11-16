import {Link} from 'react-router-dom';
import {AppName, AppRoute} from '../../consts.ts';
import {Helmet} from 'react-helmet-async';


export function NotFound(){
  return(
    <>
      <Helmet>
        <title>{AppName}. Not found</title>
      </Helmet>
      <h1>Not Found</h1>
      <Link to={AppRoute.Main}>Перейти на главную</Link>
    </>
  );
}
