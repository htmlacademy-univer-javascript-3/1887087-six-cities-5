import {AllCities} from '../../consts.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import clsx from 'clsx';
import {changeCity} from '../../store/action.ts';


export function CitiesList(){
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.City);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {AllCities.map((city) =>
          (
            <li className="locations__item" key={city.Name}>
              <a
                className={clsx('locations__item-link', 'tabs__item', currentCity.Name === city.Name && 'tabs__item--active')}
                onClick={() => dispatch(changeCity(city))}
              >
                <span>{city.Name}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
