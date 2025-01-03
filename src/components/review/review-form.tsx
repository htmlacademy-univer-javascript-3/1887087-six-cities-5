import {FormEvent, useEffect, useState} from 'react';
import {Rating} from '../offers/rating/rating.tsx';
import {postReviewAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../store/hooks.ts';

type ReviewFormProps = {
  OfferId: string;
};


export function ReviewForm(props: ReviewFormProps): JSX.Element {
  const [isFormValid, setIsFormValid] = useState(false);

  const [rating, setRating] = useState<number|null>(null);
  const [comment, setComment] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      comment.length > 50 &&
      rating !== null
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [rating, comment]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReviewAction({
        comment: comment,
        rating: rating ?? 0,
        id: props.OfferId,
      })
    );
  };


  return (
    <form className="reviews__form form" onSubmit={handleSubmit} method="post" aria-disabled={isFormValid}>
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
          setComment(value);
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
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
