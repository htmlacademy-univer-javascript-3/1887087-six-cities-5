import {useState} from 'react';
import {Rating} from '../offers/rating/rating.tsx';


export function ReviewForm(){
  const [, setRating] = useState<number>(5);
  const [, setReview] = useState<string>('');

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating SetRating={setRating} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue=""
        onChange={({ target: { value } }) => {
          setReview(value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={false}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
