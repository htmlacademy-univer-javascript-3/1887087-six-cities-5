import clsx from 'clsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {getAuthorizationStatus} from '../../store/user/user.selectors.ts';
import {redirectToRoute} from '../../store/actions.ts';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {editFavorites} from '../../store/api-actions.ts';
import {BookmarkStyle, bookmarkStyles} from './bookmark-styles.ts';
import {Offer} from '../../types/offer.ts';
import {SingleOffer} from '../../types/single-offer.ts';

type BookmarkProps = {
  Offer: Offer | SingleOffer;
  BookmarkStyle: BookmarkStyle;
}

export function Bookmark(props: BookmarkProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const handleBookmarkClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    } else {
      dispatch(
        editFavorites({
          offerId: props.Offer.id,
          isFavoriteNow: props.Offer.isFavorite,
        })
      );
    }
  };

  const style = bookmarkStyles[props.BookmarkStyle];

  return (
    <button
      className={clsx(
        `${style.classPrefix}__bookmark-button`,
        'button',
        props.Offer.isFavorite && `${style.classPrefix}__bookmark-button--active`)}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg className={`${style.classPrefix}__bookmark-icon`} width={style.width} height={style.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
