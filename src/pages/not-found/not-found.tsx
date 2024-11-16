import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';


export function NotFound(){
  return(
    <>
      <h1>Not Found</h1>
      <Link to={AppRoute.Main}>Перейти на главную</Link>
    </>
  );
}
